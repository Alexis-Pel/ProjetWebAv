<template>
  <div class="main-wrapper">
    <div class="settings">
      <div class="before">
        <h1 style="color: white">{{ inputPseudo }}</h1>
      </div>
      <div class="after">
        <div class="pseudo">
          <input
            class="input"
            type="text"
            placeholder="nouveaux pseudo"
            v-model="inputPseudo"
          />
        </div>
        <div style="display: flex; justify-content: space-evenly">
          <img :src="inputImg" class="imageProfil"/>
          <input
            class="input"
            type="text"
            placeholder="nouvelle image"
            v-model="inputImg"
          />
        </div>
      </div>
      <button v-on:click="submit(inputPseudo, inputImg)" @click="routers()">sauvegarder et quitter</button>
    </div>
  </div>
</template>

<script>
import router from '../router'
import { getCookie } from "../assets/js/cookies";
import { server } from "../helper";
import axios from "axios";
import { decrypt } from "../assets/js/encryption";

export default {
  components: {},
  data() {
    return {
      userLogged: {}, //data of the logged user
      inputPseudo: null,
      inputImg: null,
    };
  },
  async beforeMount() {
    let login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then(
          (data) => (
            (this.userLogged = data.data),
            (this.inputPseudo = data.data.pseudo),
            (this.inputImg = data.data.img)
          )
        );
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async submit(inputPseudo, inputImg) {
      try {
        await axios.put(
          `${server.baseURL}/users/update?customerID=${this.userLogged._id}`,
          {
            pseudo: inputPseudo,
            img: inputImg,
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
    routers(){
      router.push({ path: '/friends',})
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
.imageProfil{
  height: 80px;
  width: 80px;
  border-radius: 50%;
  
}
</style>
