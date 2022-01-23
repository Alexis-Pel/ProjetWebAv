<template>
  <div>
    {{ friendList }}
  </div>
</template>

<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      friendIdList: null,
      friendList: [],
    };
  },
  created() {
    this.$root.$on("userLogged", (text) => {
      this.friendIdList = JSON.parse(text).friends;
      this.getFriendsinfos();
    });
  },
  methods: {
    async getFriendsinfos(){
      for (let index = 0; index < this.friendIdList.length; index++) {
        const friendId = this.friendIdList[index];
        await axios
          .get(`${server.baseURL}/users/user/${friendId}`)
          .then((data) => (this.friendList.push({'img': data.data.img, 'username': data.data.pseudo})));
      }
    }
  }
};
//testfriends@gmail.com
//test
</script>

<style scoped>
</style>