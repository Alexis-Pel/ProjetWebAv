<template>
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
      userLogged: {},
    };
  },
  //Change URL If user is logged in(Only 1 time)
  async beforeMount() {
    var login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then((data) => (this.userLogged = data.data));
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.icone{
    width: 32px;height: 32px;margin-right: 12px;
}
a:hover{
    background-color: #3a3d43;
}
.friendLink {
  position: relative;
  max-width: 224px;
  box-sizing: border-box;
  display: block;
  padding: 1px 0;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
}
.PseudoText {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  line-height: 18px;
  font-weight: 600;
}
.Id {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #b9bbbe;
  line-height: 13px;
  font-size: 11px;
}
.userData {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5px;
}
.wrapper {
  flex: 1 1 auto;
  height: 94%;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.User {
  display: flex;
  background-color: #282b2f;
  height: 52px;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 1px;
}
button {
  width: 90%;
  height: 28px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #202225;
  border: none;
  text-align: left;
  color: #72767d;
  line-height: 24px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
}
</style>