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
      userLogged: {} //data of the logged user
    };
  },
  //Change URL If user is logged in(Only 1 time)
  async beforeMount() {
      var login = getCookie('token_login');
      login = decrypt(login);
      try {
        await axios
          .get(`${server.baseURL}/users/user/${login}`)
          .then((data) => (this.userLogged = data.data));
          //If connected
          if(this.$route.name == "login" || this.$route.name == "register"){
            //router.push({name: "friends"})//change to service url
            window.location = "/friends";
          }
          this.$root.$emit('userLogged', `${JSON.stringify(this.userLogged)}`) //EMIT THE LOGGED USER
          //If not Connected
      } catch (e) {
          if(this.$route.name == "friends"){//change to services urls
            router.push({name: "login"})
          }
      }
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
  height:100%;
  width:100%;
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