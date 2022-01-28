<template>
  <div style="display: flex; height: 100%; overflow:hidden">
    <div style="display: flex; width: 28%">
      <div style="background-color: #1f2225; height: 100%; width: 23%">

      </div>
      <div style="width: 77%; height: 100%; background-color: #2e3136">
        <nav style="height: 94%">
          <div
            style="
              height: 51px;
              border-bottom: 1px solid #232428;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <button class="conversation">
              Rechercher/lancer une conversation
            </button>
          </div>
          <div class="wrapper">
            <a
              @click="changeComponent('listFriends')"
              style="margin-left: 8px; margin-top: 8px; margin-right: 8px"
              class="friendLink"
            >
              <div
                style="
                  margin-left: 10px;
                  display: flex;
                  align-items: center;
                  border-radius: 4px;
                  height: 42px;
                "
              >
                <div class="icone">
                  <svg
                    style="color: #b9bbbe"
                    class="linkButtonIcon-7rsZcu"
                    aria-hidden="false"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="currentColor"
                        fill-rule="nonzero"
                        d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                        transform="translate(2 4)"
                      ></path>
                      <path
                        d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div
                  style="
                    margin-left: 8px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #b9bbbe;
                    line-height: 18px;
                    font-weight: 600;
                  "
                >
                  Amis
                </div>
              </div>
            </a>
            <a
              style="margin-left: 8px; margin-top: 8px; margin-right: 8px"
              class="storeLink"
            >
              <div
                style="
                  margin-left: 10px;
                  display: flex;
                  align-items: center;
                  border-radius: 4px;
                  height: 42px;
                "
              >
                <div class="icone">
                  <svg
                    style="color: #b9bbbe"
                    class="linkButtonIcon-7rsZcu"
                    aria-hidden="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                    ></path>
                  </svg>
                </div>
                <div
                  style="
                    margin-left: 8px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #b9bbbe;
                    line-height: 18px;
                    font-weight: 600;
                  "
                >
                  Nitro
                </div>
              </div>
            </a>
            <h2 class="createPrivate">
              <span class="spanPM" style="width: 100%; text-align: left"
                >Messages Privés</span
              >
              <div @click="friendsChoice()" class="buttonPM" role="button">
                <svg
                  style="
                    flex: 0;
                    width: 16px;
                    height: 16px;
                    margin-left: 0;
                    margin-right: 2px;
                  "
                  x="0"
                  y="0"
                  class="
                    privateChannelRecipientsInviteButtonIcon-1ObKXK
                    icon-2xnN2Y
                  "
                  aria-hidden="false"
                  width="24"
                  height="24"
                  viewBox="0 0 18 18"
                >
                  <polygon
                    fill-rule="nonzero"
                    fill="currentColor"
                    points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                  ></polygon>
                </svg>
              </div>
            </h2>
            <li
              style="margin-top:10px;display: flex; flex-direction: column;align-items:center"
              v-for="group in groups"
              :key="group.id"
            ><div @click="goToGroup(group.id)" class="groupWrapper">
              <img class="groupAvatar" :src="group.img" />
              <p style="font-weight:500;font-family: 'Helvetica Neue';font-size: 16px;line-height: 25px;white-space: nowrap;color: #8e9297;text-align: left;width: 100%;">{{ group.name }}</p>
              </div>
            </li>
          </div>
        </nav>
        <section>
          <div class="User">
            <div class="avatar">
              <img class="avatar" :src="this.userLogged.img" />
            </div>
            <div id="user" class="userData" @click="copyUser()">
              <div class="Pseudo">
                <div class="PseudoText">{{ this.userLogged.pseudo }}</div>
              </div>
              <div class="Id">#{{ this.userLogged._id }}</div>
            </div>
            <div class="option"></div>
          </div>
        </section>
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: right;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
      "
    >
      <div
        style="
          display: flex;
          justify-content: space-around;
          width: 100%;
          background-color: #36393e;
          border-bottom: 1px solid #2b2e31;
          padding-bottom: 10px;
        "
      >
        <h3
          style="
            display: flex;
            align-items: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #fff;
            line-height: 18px;
            font-weight: 600;
            font-size: 16px;
            margin-top: 14px;
            margin-bottom: 0;
            border-right: 1px solid #424549;
            padding-right: 15px;
          "
        >
          Amis
        </h3>
        <a
          @click="changeComponent('listFriends')"
          style="
            margin-right: 10%;
            margin-top: 15px;
            margin-bottom: 1px;
            color: #b9bbbe;
          "
          class="allFriends"
        >
          <span
            class="spanTous"
            style="padding-right: 8px; padding-left: 8px; cursor: pointer"
            >Tous</span
          >
        </a>
        <a
          style="
            margin-right: 10%;
            margin-top: 15px;
            margin-bottom: 1px;
            color: #b9bbbe;
          "
          @click="changeComponent('waitingFriend')"
          class="pendingFriends"
        >
          <span
            class="spanAttente"
            style="padding-right: 8px; padding-left: 8px; cursor: pointer"
            >En attente</span
          >
        </a>
        <button
          style="margin-right: 10%; margin-top: 15px; margin-bottom: 1px"
          @click="changeComponent('addFriend')"
          class="addFriend"
        >
          <span>Ajouter un ami</span>
        </button>
      </div>
      <div style="width: 100%; display: flex; height: 100%">
        <component style="height: 48.4em" :is="activeComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import friendListComponent from "../components/Friend_List.vue";
import addFriend from "../components/addFriend.vue";
import waitingFriend from "../components/waitingFriend.vue";
import { getCookie } from "../assets/js/cookies";
import { server } from "../helper";
import axios from "axios";
import { decrypt, encrypt } from "../assets/js/encryption";
import router from '../router'
export default {
  data() {
    return {
      activeComponent: friendListComponent,
      userLogged: {},
      groups: [],
    };
  },
  components: {
    friendListComponent,
    addFriend,
    waitingFriend,
  },
  async beforeMount() {
    var login = getCookie("token_login");
    login = decrypt(login);
    try {
      await axios
        .get(`${server.baseURL}/users/user/${login}`)
        .then((data) => ((this.userLogged = data.data), this.getGroupsInfos()));
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    friendsChoice(){
      router.push('/group')
    },
    goToGroup(groupId){
      groupId = encrypt(groupId)
      router.push({ path: '/chat', query: { search: groupId } })
    },
    async copyUser() {
      await navigator.clipboard.writeText(
        `${this.userLogged.pseudo}#${this.userLogged._id}`
      );
      alert("Copied!");
    },
    async getGroupsInfos() {
      for (let index = 0; index < this.userLogged.groups.length; index++) {
        const groupID = this.userLogged.groups[index];
        try {
          await axios
            .get(`${server.baseURL}/messages/message/${groupID}`)
            .then((data) =>
              this.groups.push({
                img: data.data.img,
                name: data.data.name,
                id: data.data._id,
              })
            );
        } catch (e) {
          console.log(e);
        }
      }
    },
    changeComponent(name) {
      if (name == "addFriend") {
        this.activeComponent = addFriend;
      }
      if (name == "waitingFriend") {
        this.activeComponent = waitingFriend;
      }
      if (name == "listFriends") {
        if (this.activeComponent == friendListComponent) {
          this.$root.$emit("userLogged", `${JSON.stringify(this.userLogged)}`); //EMIT THE LOGGED USER
        } else {
          this.activeComponent = friendListComponent;
        }
      }
    },
  },
};
</script>

<style scoped>
.groupWrapper:hover{
  background-color: #3a3d43;
}
.groupWrapper{
  display:flex;
  width:90%;
  margin-bottom:3%;
  padding-top:8px;
  border-radius: 4px;
  cursor: pointer;
}
.groupAvatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
  margin-left: 6%;
  margin-right: 9%;
}
.spanTous:hover {
  color: #fff;
}
.spanAttente:hover {
  color: #fff;
}
.buttonPM {
  cursor: pointer;
}
.buttonPM:hover {
  color: #fff;
  cursor: pointer;
}
.spanPM:hover {
  color: #fff;
  cursor: pointer;
}
.createPrivate {
  display: flex;
  padding: 18px 8px 4px 18px;
  height: 40px;
  color: #8e9297;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.25px;
  font-family: "Helvetica Neue";
  justify-content: space-between;
}
#friendChoice{
  background-color:white; height:200px; width:200px;display: none;z-index:100
}
.addFriend {
  background-color: hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%);
  color: hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%);
  align-items: center;
  text-align: center;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  min-width: 40px;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;
  font-weight: 500;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 2px 8px;
  border: 0;
  margin-right: 20%;
  margin-top: 5px;
}
.icone {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
a:hover {
  background-color: #3a3d43;
}
.friendLink {
  background-color: #393c42;
  position: relative;
  max-width: 94%;
  box-sizing: border-box;
  display: block;
  padding: 1px 0;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
}
.storeLink {
  position: relative;
  max-width: 94%;
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
  margin-left: 10px;
  cursor: pointer;
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
  height: 50px;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 1px;
}
.conversation {
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