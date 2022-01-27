<template>
  <div class="main-container">
    <header>
      <h2>Ajouter un ami</h2>
      <form>
        <div
          style="
            color: white;
            color: #b9bbbe;
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
          "
        >
          Tu peux ajouter un ami grâce à son Discord Tag. Attention aux
          mAjUsCuLeS !
        </div>
        <div id="inputDiv" class="InputDiv">
          <input
            @input="checkLength()"
            v-model="userToSearch"
            placeholder="Entre un nom d'utilisateur#000"
          />
          <button
            @click="checkUser()"
            id="sendInvite"
            type="button"
            disabled=""
            class=""
          >
            <div>Envoyer une demande d'ami</div>
          </button>
        </div>
      </form>
      <div id="SucessForm" class="Success">
        Bravo! Ta demande d'ami a été envoyée à
        <strong>{{ this.userToSearch }}</strong>
      </div>
      <div id="ErrorForm" class="Error">
        Mhm, ça n'a pas marché. Vérifie bien que la casse, l'orthographe, les
        espaces et les chiffres sont corrects.
      </div>
    </header>
    <div
      style="
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        style="
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
      >
        <div class="img"></div>
        <div style="color: #72767d; font-size: 16px; line-height: 20px">
          Wumpus attend des amis. Mais rien ne t'oblige à en ajouter !
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "../assets/js/cookies";
import { server } from "../helper";
import axios from "axios";
import { decrypt } from "../assets/js/encryption";

export default {
  components: {},
  data() {
    return {
      loggedID: "",
      userToSearch: "",
      friend: "",
      requestPendingFriends: null,
      requestFriends: null
    };
  },
  async beforeMount() {
    var login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then((data) => (this.loggedID = data.data._id));
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    checkLength() {
      document.getElementsByClassName("Success")[0].style.display = "none";
      document.getElementsByClassName("Error")[0].style.display = "none";
      document.getElementsByClassName("InputDiv")[0].style.border =
        "1px solid #232427";
      if (this.userToSearch.length >= 4) {
        document.getElementById("sendInvite").disabled = false;
        document.getElementById("sendInvite").style.opacity = "1";
        document.getElementById("sendInvite").style.cursor = "default";
      } else {
        document.getElementById("sendInvite").disabled = true;
        document.getElementById("sendInvite").style.opacity = ".5";
        document.getElementById("sendInvite").style.cursor = "not-allowed";
      }
    },
    errorForm() {
      document.getElementsByClassName("Success")[0].style.display = "none";
      document.getElementsByClassName("Error")[0].style.display = "block";
      document.getElementsByClassName("InputDiv")[0].style.border =
        "1px solid #ff0000";
    },
    successForm() {
      document.getElementsByClassName("Error")[0].style.display = "none";
      document.getElementsByClassName("Success")[0].style.display = "block";
      document.getElementsByClassName("InputDiv")[0].style.border =
        "1px solid #4fdc7c";
    },
    checkAlreadyInvited() {
      if (this.requestPendingFriends.indexOf(this.loggedID) == -1 && this.requestFriends.indexOf(this.loggedID) == -1) {
        return false;
      } else {
        return true;
      }
    },
    async checkUser() {
      const user = this.userToSearch.split("#");
      if (user.length != 2) {
        this.errorForm();
        console.log("Erreur")
        return
      }
      if (user[1] == this.loggedID) {
        this.errorForm();
        console.log("Erreur 2")
        return
      }
      if (user[1] == this.loggedID) {
        this.errorForm();
        console.log("Erreur 3")
        return
      } else {
        try {
          await axios
            .get(`${server.baseURL}/users/user/${user[1]}`)
            .then(
              (data) => (this.friend = data.data.pseudo,
              this.requestFriends = data.data.friends,
              this.requestPendingFriends = data.data.pendingFriends
              )
            );
        } catch (error) {
          this.errorForm();
          console.log(error)
          return
        }
        if (this.friend === user[0]) {
          if (this.checkAlreadyInvited() == true) {
            this.errorForm();
            console.log("Erreur 5")
            return;
          } else {
            this.requestPendingFriends.push(this.loggedID);
            try {
              await axios.put(
                `${server.baseURL}/users/update?customerID=${user[1]}`,
                { pendingFriends: this.requestPendingFriends }
              );
              this.successForm();
              console.log("Success")
              return
            } catch (error) {
              this.errorForm();
              console.log("Erreur 6")
              return
            }
          }
        }
      }
    },
  },
};
</script>


<style scoped>
#inputDiv {
  width: 100%;
  background-color: #303338;
  border: 1px solid #232427;
  margin-top: 16px;
  padding: 0 12px;
  border-radius: 8px;
  flex: 1 1 auto;
  display: flex;
  margin-right: 16px;
  padding: 4px 0;
  padding-left: 8px;
}
.img {
  flex: 0 1 auto;
  width: 376px;
  height: 162px;
  background-image: url("../assets/wumpus_add_friend.svg");
}
.Error {
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #ff0000;
  margin-top: 8px;
  display: none;
}

.Success {
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #4fdc7c;
  margin-top: 8px;
  display: none;
}
button {
  cursor: not-allowed;
  width: auto;
  height: 32px;
  min-width: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #444c96;
  color: white;
  opacity: 0.5;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 2px 16px;
  min-height: 32px;
  width: auto;
  margin-top: 3px;
  margin-right: 10px;
}
h2 {
  margin-bottom: 8px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 600;
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  border-bottom: 1px solid #424549;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
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
  flex-direction: column;
}
input {
  align-items: center;
  color: #72767c;
  background-color: transparent;
  display: flex;
  position: relative;
  font-family: "Helvetica Neue";
  width: 66%;
  border: none;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 20px;
  white-space: pre;
  height: 40px;
  margin-right: 2%;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>