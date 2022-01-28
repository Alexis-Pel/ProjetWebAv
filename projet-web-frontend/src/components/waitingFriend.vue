<template>
  <div class="main-container">
    <header>
      <div v-if="pendingInfos.length == 0" class="pasDamis">
       
        <div class="bel-Ami">
          <img src="@/assets/wumpus.png" class="imgWumpus">
        </div>
        <div class="sous-Ami">
          Il n'y a aucune demande d'ami en attente. Tiens, voilà Wumpus en attandant.
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
                    <img class="logoImg" :src="friend.img" />
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
                    <button class="no" @click="refusedFriend(friend._id)">
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
      pendingInvites: [], //id dans pendingFriends
      pendingInfos: [], //info des personnes qui demande en ami
      logedId: null, //mon id
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
  },

  methods: {
    async acceptedFriend(idFriend) {
      var friendFriends = await this.getFriend(idFriend); //on récupère les infos de la personne qui demande en ami qu'on met dans friendFriends
      console.log(friendFriends);

      friendFriends.push(this.logedId); //on rajoute notre id dans le tableau d'ami de notre ami
      this.setFriend(idFriend, friendFriends); //on met à jour la bdd

      var myFriends = await this.getFriend(this.logedId);//on récupère les infos de la personne qui reçoit la demande qu'on met dans myFriends
      myFriends.push(idFriend); //on rajoute notre l'id de notre ami dans le tableau de la personne qui reçoit la demande
      this.setFriend(this.logedId, myFriends); //on met à jour la bdd

      var index = this.pendingInvites.indexOf(idFriend); //on mes à jour nos tableaus en local
      if (this.pendingInvites.length == 1) {
        this.pendingInvites = [];
        this.pendingInfos = [];
      } else {
        this.pendingInvites = this.pendingInvites.splice(index - 1, 1);
        this.pendingInfos = this.pendingInfos.splice(index - 1, 1);
      }
      try {
          await axios.put(
            `${server.baseURL}/users/update?customerID=${this.logedId}`, { //on met à jour les demandes d'amis de la personne dans la bdd 
            pendingFriends: this.pendingInvites, 
          });
        } catch (error) {
          console.log(error);
        }
    },

    async refusedFriend(idFriend){

      var index = this.pendingInvites.indexOf(idFriend); //on mes à jour nos tableaus en local
      if (this.pendingInvites.length == 1) {
        this.pendingInvites = [];
        this.pendingInfos = [];
      } else {
        this.pendingInvites = this.pendingInvites.splice(index - 1, 1);
        this.pendingInfos = this.pendingInfos.splice(index - 1, 1);
      }
      try {
          await axios.put(
            `${server.baseURL}/users/update?customerID=${this.logedId}`, { //on met à jour les demandes d'amis de la personne dans la bdd 
            pendingFriends: this.pendingInvites, 
          });
        } catch (error) {
          console.log(error);
        }
      
    },

    async setFriend(id, addFriends) { //on met à jour les amis de la personne dans la bdd 
        try {
          await axios.put(
            `${server.baseURL}/users/update?customerID=${id}`, {
            friends: addFriends, 
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
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
}

.pasDamis {
  margin: 0%;
  padding: 0%;
  padding-top: 9%;
  padding-left: 10%;
  padding-right: 10%;

}
.bel-Ami{
  width: 100%;
  padding: 0%;
  margin: 0%;

}
.sous-Ami {
  padding: 0%;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
  color: #b9bbbe8a;
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
}
.imgWumpus{
  width: 75%;
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
.logoImg{
  border-radius: 50%;
  height: 40px;
  width: 40px;
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
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
