<template>
  <div>
    <div class="chat">
      <div class="intro">
        <div class="titleImg">
          <img class="titleImg" :src="infos.img" />
        </div>
        <div class="title">
          <h5 style="font-size: 1.4rem">{{ infos.name }}</h5>
        </div>
        <div class="welcome">
          <h6 style="font-size: 13px">Bienvenue au début du groupe privé</h6>
        </div>
      </div>
      <div
        style="
          padding-top: 5px;
          margin-top: 5px;
          border-bottom: 1px solid #424549;
        "
        v-for="message in infos.messages"
        :key="message.id"
      >
        <div class="container">
          <div class="img">
            <img class="img" :src="message.img" />
          </div>
          <div class="block-message">
            <div class="pseudo-date">
              <p class="pseudo">{{ message.pseudo }}</p>
              <p class="date">{{ message.date }}</p>
            </div>
            <div class="content">
              <p style="font-size: 13px; margin-bottom: 0" class="message">
                {{ message.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="divInput">
        <input
          class="input"
          v-on:keyup.enter="submit(input)"
          type="text"
          placeholder="Envoyer un message"
          v-model="input"
          style="color: #fff; text-align: left"
        />
      </div>
    </div>
    <div id="end" style="margin-top: 8%"></div>
  </div>
</template>

<script>
import { server } from "../helper";
import axios from "axios";
import { decrypt } from "../assets/js/encryption";
import { getCookie } from "../assets/js/cookies";

export default {
  name: "chat",
  data() {
    return {
      infos: null,
      input: "",
      userLogged: null,
      discussionId: "",
    };
  },
  async beforeMount() {
    let params = this.$route.query.search;

    this.discussionId = decrypt(params);
    this.reloadMessage();
    this.loadMessage();

    let login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then((data) => (this.userLogged = data.data));
    } catch (e) {
      console.log(e);
    }
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  },
  methods: {
    async submit(input) {
      if (input.length > 0) {
        let newMessage = {
          pseudo: this.userLogged.pseudo,
          id: this.infos.messages.length,
          message: input,
        };
        this.infos.messages.push(newMessage);
        try {
          await axios.put(
            `${server.baseURL}/messages/update?messagesID=${this.infos._id}`,
            {
              //on met à jour les demandes d'amis de la personne dans la bdd
              messages: this.infos.messages,
            }
          );
        } catch (error) {
          console.log(error);
        }
        this.input = "";
      }
    },
    async loadMessage() {
      try {
        await axios
          .get(`${server.baseURL}/messages/message/${this.discussionId}`)
          .then((data) => (this.infos = data.data));
      } catch (e) {
        console.log(e);
      }
    },
    reloadMessage() {
      setInterval(this.loadMessage, 999);
    },
  },
};
</script>

<style scoped>
.titleImg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.title {
  text-align: left;
  margin-left: 1%;
  padding-left: 1%;
  color: white;
}
.welcome {
  text-align: left;
  margin-left: 1%;
  padding-left: 1%;
  color: #b9bbbe;
}
.chat {
  display: flex;
  height: 122.5%;
  background-color: rgb(54, 57, 63);
  justify-content: flex-start;
  flex-direction: column;
  overflow: visible;
}
.message {
  color: #dcddde;
}
p {
  margin-left: 10px;
}
.intro {
  display: flex;
  align-items: center;
  padding-bottom: 2%;
  margin-bottom: 3%;
  margin-top: 1%;
  border-bottom: 1px #424549 solid;
  justify-content: center;
}
.pseudo {
  color: white;
  font-weight: 600;
}
.date {
  color: gray;
}
div.text {
  display: flex;
}
div.img {
  display: flex;
}
.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.block-message {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  margin-left: 5px;
}
.container {
  display: flex;
  margin-left: 1%;
  padding-left: 1%;
}
.pseudo-date {
  display: flex;
}
.content {
  text-align: left;
}
.divInput {
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(54, 57, 63);
  height: 7%;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.input {
  width: 95.0001%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.192);
  border-radius: 5px;
  text-align: center;
  color: gray;
  border: 0;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  padding-left: 3%;
  overflow: hidden;
}
</style>
<style>
html,
body {
  background-color: rgb(54, 57, 63);
}
</style>