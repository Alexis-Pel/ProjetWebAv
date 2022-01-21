<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getCookie } from "./assets/js/cookies";
import { server } from "./helper";
import axios from "axios";
import { decrypt } from "./assets/js/encryption";
import router from "./router"

export default {
  components: {},
data() {
    return {
      userData: {}
    };
  },
  //Change URL If user is logged in(Only 1 time)
  async beforeMount() {
      var login = getCookie('token_login');
      login = decrypt(login);
      try {
        await axios
          .get(`${server.baseURL}/users/user/${login}`)
          .then((data) => (this.userData = data.data));
          //If connected
          if(this.$route.name == "login"){
            router.push({name: "register"})//change to service url
          }
          //If not Connected
      } catch (e) {
          if(this.$route.name == "login"){//change to services urls
            router.push({name: "login"})
          }
      }
      console.log(this.userData)
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  width:100vw;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  height:100vh;
  width:100vw;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>