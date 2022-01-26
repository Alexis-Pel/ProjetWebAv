<template>
  <div class="main-container">
    <header>
      <div v-if="pendingInfos.length == 0" class="pasDamis">
        <h2>En attente d'amis</h2>
        <div class="sous-titre">
          Il n'y a aucune demande d'ami en attente. Essaye de manger des curlys!
        </div>
      </div>
      <div class="wrapper" v-else>
        <div
          class="friends_container"
          style="margin: 16px 20px 8px 4%; flex: 1 1 auto; height: 100%"
        >
          <div
            style="
              position: relative;
              flex-direction: row;
              flex-wrap: wrap;
              padding: 1px;
              min-width: 0;
            "
          >
            <input
              style="
                font-size: 16px;
                color: #dcddde;
                background-color: #1f2225;
                border: none;
                appearance: none;
                width: 100%;
                min-width: 48px;
                line-height: 32px;
                height: 30px;
                padding: 0 8px;
              "
              placeholder="Rechercher"
              value=""
            />
            <div
              class="iconLayout-3Bjizv medium-2NClDM"
              tabindex="-1"
              role="button"
            >
              <div class="iconContainer-6pgShY"></div>
            </div>
          </div>
        </div>
        <div class="sousWrapper">
          <h3>EN ATTENTE - {{ pendingInfos.length }}</h3>
          <ul v-for="friend in pendingInfos" :key="friend._id" class="list">
            <li>
              <div class="request">
                <div class="left-box">
                  <div class="img">
                    <img :src="friend.img" />
                  </div>
                  <div class="pseudo-text">
                    <div class="pseudo">{{ friend.pseudo }}</div>
                    <div class="text"><p>Demande d'ami reçue</p></div>
                  </div>
                </div>
                <div class="right-box">
                  <div class="divButYes">
                    <button class="yes" @click="acceptedFriend(friend._id)">
                      <img
                        class="imgBut"
                        src="@/assets/check.png"
                        alt="check"
                      />
                    </button>
                  </div>
                  <div class="divButNo">
                    <button class="no">
                      <img
                        class="imgBut"
                        src="@/assets/croix.png"
                        alt="croix"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>


<script>
import { getCookie } from "../assets/js/cookies";
import { server } from "../helper";
import axios from "axios";
import { decrypt } from "../assets/js/encryption";

export default {
  data() {
    return {
      pendingInvites: [],
      pendingInfos: [],
      logedId: null,
    };
  },

  async beforeMount() {
    var login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then(
          (data) => (
            (this.pendingInvites = data.data.pendingFriends),
            (this.logedId = data.data._id)
          )
        );

      for (let index = 0; index < this.pendingInvites.length; index++) {
        const id = this.pendingInvites[index];
        try {
          await axios
            .get(`${server.baseURL}/users/user/${id}`)
            .then((data) => this.pendingInfos.push(data.data));

          console.log(this.pendingInfos);
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async acceptedFriend(idFriend) {
      /*
      var friendFriends = this.getFriend(idFriend);
      friendFriends.push(this.logedId);
      this.setFriend(idFriend, friendFriends);

      var myFriends = this.getFriend(this.logedId);
      myFriends.push(idFriend);
      this.setFriend(this.logedId, myFriends);
*/
      var index = this.pendingInvites.indexOf(idFriend);

      if (this.pendingInvites.length == 1) {
        this.pendingInvites = [];
        this.pendingInfos = [];
      } else {
        this.pendingInvites = this.pendingInvites.splice(index - 1, 1);
        this.pendingInfos = this.pendingInfos.splice(index - 1, 1);
      }
      console.log(this.pendingInvites);
      console.log(this.logedId);
      try {
        await axios.put(
          `${server.baseURL}/users/update?customerID=${this.logedId}`,
          { pendingFriends: this.pendingInvites}
        );
      } catch (error) {
        console.log(error);
      }

      //this.pendingInfos.splice(index,1);

      //console.log(this.pendingInvites);
    },

    async setFriend(id, addFriends) {
      try {
        await axios.put(`${server.baseURL}/users/update?customerID=${id}`, {
          friends: addFriends,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getFriend(id) {
      var localFriend;
      try {
        await axios
          .get(`${server.baseURL}/users/user/${id}`)
          .then((data) => (localFriend = data.data.friends));
      } catch (error) {
        console.log(error);
      }
      return localFriend;
    },
  },
};
</script>




<style scoped>
h2 {
  margin-bottom: 8px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 600;
}
.sous-titre {
  color: white;
  color: #b9bbbe;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
}
.main-container {
  width: 100%;
  height: 100%;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  display: flex;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline;
  background-color: #36393e;
  color: yellow;
}
.pasDamis {
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
}
.wrapper {
  width: 100%;
}
.sousWrapper {
  margin-top: 3%;
}
h3 {
  color: #b9bbbe;
  font-size: 80%;
  text-align: left;
  font-weight: bold;
  margin: 0%;
  margin-left: 4%;
  margin-right: 0%;
  margin-top: 1%;
  margin-bottom: 2%;
}
.list {
  list-style-type: none;
  margin: 0%;
  padding: 0%;
}
.request {
  display: flex;
  padding-top: 2%;
  margin-left: 4%;
  width: 100%;
  border-top: 1px solid #424549;
}
.request:hover {
  background-color: #42464d;
}
.left-box {
  display: flex;
  width: 45%;
}
img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.pseudo-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
}
.pseudo {
  color: white;
  font-size: 100%;
  font-weight: bold;
}
.text {
  color: #b9bbbe;
}
.right-box {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  color: white;
}
.divButYes {
  padding: 0%;
  padding-top: 0.5%;
  padding-bottom: 0%;
  padding-right: 3%;
}
.divButNo {
  padding: 0%;
  padding-top: 0.5%;
  padding-right: 3%;
}
.yes {
  margin: 0%;
  padding: 0%;
  background-color: #36393e;
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
}

.no {
  margin: 0%;
  padding: 0%;
  background-color: #36393e;
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
}
.imgBut {
  width: 100%;
}
</style>