<template>
  <div class="main-wrapper">
    <div class="radio-wrapper">
      <div class="pseudos">
        <li v-for="friend in friends" :key="friend._id">
          <input
            type="checkbox"
            :id="friend._id"
            :value="friend._id"
            v-model="checkedNames"
          />
          <label style="color: white" :for="friend.id">{{
            friend.pseudo
          }}</label>
        </li>
        <button
          @click="createGroup()"
          style="color: white; background-color: black"
        >
          Create
        </button>
      </div>
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
  components: {},
  data() {
    return {
      userLogged: {}, //data of the logged user
      friends: [],
      checkedNames: [],
      friendsInfos:[],
    };
  },
  async beforeMount() {
    let login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then((data) => (this.userLogged = data.data));
      this.getFriends();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async createGroup() {
      this.checkedNames.push(this.userLogged._id)
      let createdGroup = await this.createGroupFinal(this.checkedNames, "Group")
      for (let index = 0; index < this.checkedNames.length; index++) {
          const checkedName = this.checkedNames[index];
          this.getFriends2(checkedName)
      }
      for (let index = 0; index < this.friendsInfos.length; index++) {
          const friend = this.friendsInfos[index];
          friend.groups.push(createdGroup._id)
          this.updateGroups(friend._id, friend.groups)
      }

    },
    async getFriends2(id) {
        try {
          await axios
            .get(`${server.baseURL}/users/user/${id}`)
            .then((data) => this.friendsInfos.push(data.data));
        } catch (e) {
          console.log(e);
      }
    },
    async getFriends() {
      for (let index = 0; index < this.userLogged.friends.length; index++) {
        try {
          await axios
            .get(`${server.baseURL}/users/user/${this.userLogged._id}`)
            .then((data) => this.friendsInfos.push(data.data));
        } catch (e) {
          console.log(e);
        }
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
    async createGroupFinal(ids, friendUsername) {
      var createdGroup;
      try {
        createdGroup = await axios.post(`${server.baseURL}/messages/create`, {
          name: `${this.pseudo} | ${friendUsername}`,
          attendees: ids,
          img: this.loggedimg,
          messages: [],
        });
        return createdGroup;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  justify-content: center;
  height: 800px;
  align-items: center;
}
.after {
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-around;
}
.input {
  margin-bottom: 10px;
  background-color: #303338;
  border: none;
  border-radius: 5px;
  color: darkgray;
}
.settings {
  background-color: #40444b;
  height: 300px;
  width: 700px;
}
</style>
