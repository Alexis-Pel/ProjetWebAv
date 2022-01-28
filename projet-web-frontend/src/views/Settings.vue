<template>
  <div class="main-wrapper">
      
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
      userLogged: {} //data of the logged user
    };
  },
  async beforeMount() {
      var login = getCookie('token_login');
      login = decrypt(login);
      try {
        await axios
          .get(`${server.baseURL}/users/user/${login}`)
          .then((data) => (this.userLogged = data.data));
      } catch (e) {
          console.log(e)
      }
    },
}
</script>

<style>
.main-wrapper{
  width: 100%;
  height: 100%;
  background-color: #36393e;
}
</style>