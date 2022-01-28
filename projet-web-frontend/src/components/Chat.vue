<template>
  <div class="chat">
    <div class="titleImg">
      <img class="titleImg" :src="infos.img" alt="imgConv" />
    </div>
    <div class="title">
      <h5>{{ infos.name }}</h5>
    </div>
    <div class="welcome"><h6>Bienvenue au début du groupe privé</h6></div>
    <div v-for="message in infos.messages" :key="message.id">
      <div class="container">
        <div class="img">
          <img class="img" :src="message.img" alt="imgProfil" />
        </div>
        <div class="block-message">
          <div class="pseudo-date">
            <p class="pseudo">{{ message.pseudo }}</p>
            <p class="date">{{ message.date }}</p>
          </div>
          <div class="content">
            <p class="message">{{ message.message }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="divInput"><input class="input" v-on:keyup.enter="submit(input)" type="text" placeholder="Envoyer un message" v-model="input"></div>
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
      userLogged: null
    };
  },
  async beforeMount() {
    let params = this.$route.query.search
    let id = decrypt(params)
    try {
      await axios
        .get(`${server.baseURL}/messages/message/${id}`)
        .then((data) => (this.infos = data.data));
    } catch (e) {
      console.log(e);
    }
    
    let login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then((data) => (this.userLogged = data.data));
    } catch (e) {
      console.log(e);
    }
  },
  methods:{
    async submit(input){
      
      let newMessage = {
        pseudo:this.userLogged.pseudo,id:this.infos.messages.length,message:input,
      };
      this.infos.messages.push(newMessage)
       try {
          await axios.put(
            `${server.baseURL}/messages/update?messagesID=${this.infos._id}`, { //on met à jour les demandes d'amis de la personne dans la bdd 
            messages: this.infos.messages, 
          });
        } catch (error) {
          console.log(error);
        }
        this.input = "";
    }
  }

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
.pseudo {
  color: white;
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
  width: 100%;
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
.divInput{
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
  overflow: hidden;
  
}
</style>
<style>
html,
body{
  background-color: rgb(54, 57, 63);
}
</style>