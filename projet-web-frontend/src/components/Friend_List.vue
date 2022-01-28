<template>
  <div
  class="wrapper"
    style="
      background-color: #36393f;
      width: 100%;
      height:1000px;
    "
  >
  <div>
    <div class="friends_container" style="margin: 16px 20px 8px 30px;flex: 1 1 auto;;height: 100%;"><div style="position: relative;flex-direction:row;flex-wrap: wrap;padding: 1px;min-width: 0;"><input style="font-size: 16px;color:#dcddde;background-color:#1f2225;border:none;appearance: none;width:100%;min-width: 48px;line-height: 32px;height: 30px;padding: 0 8px;" placeholder="Rechercher" value=""><div class="iconLayout-3Bjizv medium-2NClDM" tabindex="-1" role="button"><div class="iconContainer-6pgShY"></div></div></div></div>
    <h5>Tous les amis - {{ friendList.length }}</h5>
      <ul>
        <div>
          <li @click="messageTo(friend.id, friend.groups)" v-for="friend in friendList" :key="friend.id">
            <a style="display:flex; flex-direction:column;cursor:pointer">
            <div class="card">
              <div style="display:flex;margin: 0;padding: 0;border: 0;font-weight: inherit;font-style: inherit;font-family: inherit;font-size: 100%;vertical-align: baseline;">
                <svg width="40" height="32" viewBox="0 0 40 32"><foreignObject x="0" y="0" width="32" height="32"><div style="width: 100%;height: 100%;"><img :src="friend.img" aria-hidden="true"></div></foreignObject></svg>
                <span style="margin-top:5px" class="username">{{ friend.username }}</span>
              </div>
              <div class="divButNo">
                    <button class="no" @click="deletedFriend(friend.id)">
                      <img
                        class="imgBut"
                        src="@/assets/croix.png"
                        alt="croix"
                      />
                    </button>
                  </div>
            </div>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCookie } from "../assets/js/cookies";
import { server } from "../helper";
import axios from "axios";
import { decrypt, encrypt } from "../assets/js/encryption";
import router from '../router'

export default {
  data() {
    return {
      friendIdList: null,
      friendList: [],
      cacheIDList: null,
      groupsList: null,
      idLogged: null,
      loggedimg: null,
      pendingInvites: [], //id dans pendingFriends
      pendingInfos: [], //info des personnes qui demande en ami
      logedId: null, //mon id
    };
  },
  async created() {
    var login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then(
          (data) => (
            (this.friendIdList = data.data.friends),
            (this.groupsList = data.data.groups),
            (this.idLogged = data.data._id),
            (this.loggedimg = data.data.img),
            (this.pendingInvites = data.data.pendingFriends), //récupération des id dans pendingFriends
            (this.logedId = data.data._id) //récupération de mon id
          )
        );
        for (let index = 0; index < this.pendingInvites.length; index++) {
        const id = this.pendingInvites[index];
        try {
          await axios
            .get(`${server.baseURL}/users/user/${id}`)
            .then((data) => this.pendingInfos.push(data.data))//on récupère les infos des personnes qui demande en ami qu'on met dans pendingInfos
        } catch (e) {
          console.log(e);
          }
        }
    } catch (e) {
      console.log(e);
    }
    this.getFriendsinfos();
  },
  methods: {
    async messageTo(friendId, friendGroups) {
      var isAlreadyGroup = await this.checkGroup(this.groupsList, friendId);
      if (isAlreadyGroup == false) {
        var createdGroup = await this.createGroup([this.idLogged, friendId]);
        this.groupsList.push(createdGroup.data.messages._id);
        friendGroups.push(createdGroup.data.messages._id);
        this.updateGroups(this.idLogged, this.groupsList);
        this.updateGroups(friendId, friendGroups);
      }
      else{
        this.goToGroup(isAlreadyGroup)
      }
    },
    async checkGroup(groups, friendId) {
      for (let index = 0; index < groups.length; index++) {
        const groupId = groups[index];
        if (groupId != "") {
          var groupAttendees;
          try {
            await axios
              .get(`${server.baseURL}/messages/message/${groupId}`)
              .then((data) => (groupAttendees = data.data.attendees));
          } catch (e) {
            console.log(e);
          }
          if (groupAttendees != undefined) {
            if (groupAttendees.length == 2) {
              if (
                groupAttendees.indexOf(this.idLogged) != -1 &&
                groupAttendees.indexOf(friendId) != -1
              ) {
                return groupId;
              }
            }
          }
        }
      }
      return false;
    },
    goToGroup(groupId){
      groupId = encrypt(groupId)
      router.push({ path: '/chat', query: { search: groupId } })
    },
    async updateGroups(id, group) {
      try {
        await axios.put(`${server.baseURL}/users/update?customerID=${id}`, {
          groups: group,
        });
        console.log("reussis");
        window.location = "/friends";
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    },
    async createGroup(ids) {
      var createdGroup;
      try {
        createdGroup = await axios.post(`${server.baseURL}/messages/create`, {
          name: "PrivateMessage",
          attendees: ids,
          img: this.loggedimg,
          messages: [],
        });
        return createdGroup;
      } catch (e) {
        console.log(e);
      }
    },
    async getFriendsinfos() {
      var friends = [];
      for (let index = 0; index < this.friendIdList.length; index++) {
        const friendId = this.friendIdList[index];
        if (friendId != "") {
          await axios
            .get(`${server.baseURL}/users/user/${friendId}`)
            .then((data) =>
              friends.push({
                id: data.data._id,
                img: data.data.img,
                username: data.data.pseudo,
                groups: data.data.groups,
              })
            );
        }
      }
      this.friendList = friends;
    },


    async deletedFriend(idFriend){
      var friendFriends = await this.getFriend(idFriend); //on récupère les infos de la personne qui demande en ami qu'on met dans friendFriends
      console.log(friendFriends);
      var delIndex = friendFriends.indexOf(this.logedId); 
      if (friendFriends.length == 1) {
        friendFriends = [];
      } else {
        friendFriends = friendFriends.splice(delIndex - 1, 1);
      }
      this.setFriend(idFriend, friendFriends); //on met à jour la bdd

    var myFriends = await this.getFriend(this.logedId); //on récupère les infos de la personne qui demande en ami qu'on met dans friendFriends
      console.log(myFriends);
      delIndex = myFriends.indexOf(idFriend); 
      console.log(delIndex);

      if (myFriends.length == 1) {
        myFriends = [];
      } else {
        myFriends = myFriends.splice(delIndex - 1, 1);
      }
      this.setFriend(this.logedId, myFriends); //on met à jour la bdd


    },

    async setFriend(id, delFriends) { //on met à jour les amis de la personne dans la bdd 
        try {
          await axios.put(
            `${server.baseURL}/users/update?customerID=${id}`, {
            friends: delFriends, 
          });
        } catch (error) {
          console.log(error);
        }
    },
    async getFriend(id) { //on récupère les infos du tableau friends d'une personne gràce à son id de la bdd
      var localFriend;
      try {
        await axios
          .get(`${server.baseURL}/users/user/${id}`) 
          .then((data) => localFriend = data.data.friends );
      } catch (error) {
        console.log(error);
      }
      return localFriend;
    },
  },
};
</script>

<style scoped>
a:hover {
  background-color: #3a3d43;
}
h5 {
  color: #b9bbbe;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Helvetica Neue";
  margin: 20px 20px 18px 30px;
  display: flex;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.card {
  display: flex;
  height: 62px;
  opacity: 1;
  flex-direction: row;
  margin-left: 30px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  border-top: 1px solid #424549;
  background-color: transparent;
  border-left: none;
  border-right: none;
  border-bottom: none;
  justify-content: space-between;
  max-width: 100%;
  vertical-align: baseline;
  align-items: center;
}
.username {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  font-weight: 600;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
  flex: 0 0 auto;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  cursor: default;
  z-index: 2;
  color: #dcddde;
}
img {
  width: 100%;
  height: 100%;
  margin: 0 12px 0 0;
  position: relative;
  border-radius: 50%;
}
.container-ZMc96U {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0;
  width: 100%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  cursor: default;
  z-index: 2;
  color: var(--text-normal);
}
.children-3xh0VB {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0;
  overflow: hidden;
}


.divButNo {

}

.no {
  margin: 0%;
  padding: 0%;
  background-color: #36393e00;
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 30%;
}
.imgBut {
  width: 80%;
  
  border-radius: 50%;
}


</style>