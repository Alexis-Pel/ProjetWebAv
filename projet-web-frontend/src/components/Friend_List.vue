<template>
  <div
  class="wrapper"
    style="
      background-color: #36393f;
      width: 100%;
      height:1000px;
    "
  >
  <div>
    <div class="friends_container" style="margin: 16px 20px 8px 30px;flex: 1 1 auto;;height: 100%;"><div style="position: relative;flex-direction:row;flex-wrap: wrap;padding: 1px;min-width: 0;"><input style="font-size: 16px;color:#dcddde;background-color:#1f2225;border:none;appearance: none;width:100%;min-width: 48px;line-height: 32px;height: 30px;padding: 0 8px;" placeholder="Rechercher" value=""><div class="iconLayout-3Bjizv medium-2NClDM" tabindex="-1" role="button"><div class="iconContainer-6pgShY"></div></div></div></div>
    <h5>Tous les amis - {{ friendList.length }}</h5>
      <ul>
        <div>
          <li v-for="friend in friendList" :key="friend.id">
            <a style="display:flex; flex-direction:column;cursor:pointer">
            <div class="card">
              <div style="display:flex;margin: 0;padding: 0;border: 0;font-weight: inherit;font-style: inherit;font-family: inherit;font-size: 100%;vertical-align: baseline;">
                <svg width="40" height="32" viewBox="0 0 40 32"><foreignObject x="0" y="0" width="32" height="32"><div style="width: 100%;height: 100%;"><img :src="friend.img" aria-hidden="true"></div></foreignObject></svg>
                <span style="margin-top:5px" class="username">{{ friend.username }}</span>
              </div>
            </div>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCookie } from "../assets/js/cookies";
import { server } from "../helper";
import axios from "axios";
import { decrypt } from "../assets/js/encryption";

export default {
  data() {
    return {
      friendIdList: null,
      friendList: [],
      cacheIDList: null,
      groupsList: null,
      idLogged: null,
    };
  },
  async created() {
    var login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then(
          (data) => (
            (this.friendIdList = data.data.friends),
            (this.groupsList = data.data.groups),
            (this.idLogged = data.data._id)
          )
        );
    } catch (e) {
      console.log(e);
    }
    this.getFriendsinfos();
  },
  methods: {
    async getFriendsinfos() {
      var friends = [];
      for (let index = 0; index < this.friendIdList.length; index++) {
        const friendId = this.friendIdList[index];
        if (friendId != "") {
          await axios
            .get(`${server.baseURL}/users/user/${friendId}`)
            .then((data) =>
              friends.push({
                id: data.data._id,
                img: data.data.img,
                username: data.data.pseudo,
              })
            );
        }
      }
      this.friendList = friends;
    },
  },
};
</script>

<style scoped>
a:hover {
  background-color: #3a3d43;
}
h5 {
  color: #b9bbbe;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Helvetica Neue";
  margin: 20px 20px 18px 30px;
  display: flex;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.card {
  display: flex;
  height: 62px;
  opacity: 1;
  flex-direction: row;
  margin-left: 30px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  border-top: 1px solid #424549;
  background-color: transparent;
  border-left: none;
  border-right: none;
  border-bottom: none;
  justify-content: space-between;
  max-width: 100%;
  vertical-align: baseline;
  align-items: center;
}
.username {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  font-weight: 600;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
  flex: 0 0 auto;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  cursor: default;
  z-index: 2;
  color: #dcddde;
}
img {
  width: 100%;
  height: 100%;
  margin: 0 12px 0 0;
  position: relative;
  border-radius: 50%;
}
.container-ZMc96U {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0;
  width: 100%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  cursor: default;
  z-index: 2;
  color: var(--text-normal);
}
.children-3xh0VB {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0;
  overflow: hidden;
}
</style>