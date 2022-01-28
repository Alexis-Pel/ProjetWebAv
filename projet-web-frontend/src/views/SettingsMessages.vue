<template>
  <div class="main-wrapper">
    <div class="settings">
      <div class="before">
        <h1 style="color: white">{{ inputName }}</h1>
      </div>
      <div class="after">
        <div class="pseudo">
          <input
            class="input"
            type="text"
            placeholder="nouveaux name"
            v-model="inputName"
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
      <button v-on:click="submit(inputName, inputImg)" @click="routers()">sauvegarder et quitter</button>
    </div>
  </div>
</template>

<script>
import router from '../router'
import { server } from "../helper";
import axios from "axios";
import { decrypt } from "../assets/js/encryption";

export default {
  components: {},
  data() {
    return {
      messagesLogged: {}, //data of the logged user
      inputName: null,
      inputImg: null,
      discussionId: "",
    };
  },
  async beforeMount() {
    let params = this.$route.query.search;
    let id = decrypt(params);

    try {
      await axios
        .get(`${server.baseURL}/messages/message/${id}`)
        .then(
          (data) => (
            (this.messagesLogged = data.data),
            (this.inputName = data.data.name),
            (this.inputImg = data.data.img)
          )
        );
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async submit(inputName, inputImg) {
      try {
        await axios.put(
          `${server.baseURL}/messages/update?messagesID=${this.messagesLogged._id}`,
          {name: inputName,img: inputImg}
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
