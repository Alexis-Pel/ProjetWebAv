<template>
  <div class="main-wrapper">
      <div class="settings">
        <div pseudo>
          <h1>{{ inputPseudo }}</h1>
          <input class="input" type="text" placeholder="nouveaux pseudo" v-model="inputPseudo">
        </div>
        <div>
          <img :src="inputImg" >
          <input class="input" type="text" placeholder="nouvelle image" v-model="inputImg">
        </div>
        <button v-on:click="submit(inputPseudo, inputImg)">sauvegarder</button>
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
      userLogged: {}, //data of the logged user
      inputPseudo: null,
      inputImg: null,
    };
  },
  async beforeMount() {
      let login = getCookie('token_login');
      login = decrypt(login);
      try {
        await axios
          .get(`${server.baseURL}/users/user/${login}`)
          .then((data) => (this.userLogged = data.data, this.inputPseudo = data.data.pseudo, this.inputImg = data.data.img));
      } catch (e) {
          console.log(e)
      }
  },
  methods:{
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
  }
}
</script>

<style scoped>

</style>
