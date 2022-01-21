<template>
  <div>
    <div class="wrapper">
      <div class="wrapper_box">
        <div class="left_box">
          <div class="titre">
            <h2 style="color: #fff; font-size: 25px; font-weight: 600">
              Ha, te revoila !
            </h2>
            <p style="color: #b9bbbe">Nous sommes si heureux de te revoir !</p>
          </div>
          <div class="wrapper_form">
            <div class="email">
              <p style="margin-bottom: 2px">E-MAIL <span style="font-size: 12px; color: red"> {{ emailError }}</span></p>
              <input
                @click="emailError = ''"
                type="email"
                v-model="userData.email"
                placeholder=""
              />
            </div>
            <div class="password">
              <p style="margin:0">MOT DE PASSE <span style="color: red; font-size: 10px; margin:0">{{ passwordError }}</span></p>
              <input
                @click="passwordError = ''"
                type="password"
                v-model="userData.password"
                placeholder=""
              />
              <button
                @click="message('Tant pis pour toi !')"
                type="button"
                class="forget_button"
                style="text-decoration: none; display: inline-block; border:none;background-color:#36393f;margin-top:5px"
              >
                <div style="font-size: 100%; color: #01aef4">
                  Tu as oublié ton mot de passe ?
                </div>
              </button>
            </div>
            <button
              @click="validateCred()"
              type="submit"
              style="
                background-color: #5765f2;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 2px;
                font-weight: 500;
                cursor: pointer;
                width: 100%;
                height: 44px;
              "
            >
              <div style="color: #fff">Se connecter</div>
            </button>
            <div style="text-align: left">
              <span
                style="
                  font-size: 14px;
                  line-height: 16px;
                  color: #5765f2;
                  margin-right: 5px;
                "
                >Besoin d'un compte ?</span
              >
              <button @click="message('Inscription de la noche')" type="button" style="text-decoration: none; display: inline-block; border:none;background-color:#36393f">
                <div style="color: #01aef4">S'inscrire</div>
              </button>
            </div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="right_box">
          <img
            src="@/assets/qrcode_discord.png"
            style="margin-bottom: 20px; height: 170px; width: 170px"
            alt=""
          />
          <h3 style="color: #ffffff; font-weight: 600; font-size: 20px">
            Se connecter avec un code QR
          </h3>
          <div style="font-weight: 600; font-size: 12px; color: #b9bbbe">
            Scanne-le avec l'<strong>application mobile Discord</strong> pour te
            connecter instantanément.
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-if="isSubmitted">
      <div class="card-body">
        <h4 class="card-title">Form Data</h4>
        <p>
          Mail: <b>{{ userData.email }}</b>
        </p>
        <p>
          Password: <b>{{ userData.password }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//encrypt password
//mport {getCookie} from "../assets/js/cookies.js"
import {encrypt, decrypt} from "../assets/js/encryption"

export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      emailError: "",
      passwordError: "",
      isSubmitted: false,
    };
  },

  methods: {
    validateCred() {
      const mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.userData.password == "") {
        this.passwordError = "Password cannot be empty";
        return;
      }
      if (this.userData.email.match(mailformat)) {
        this.submitted();
      } else {
        this.emailError = "Invalid email address!";
      }
    },
    message(msg) {
      alert(msg);
      console.log(document.cookie);
      //document.cookie = "username=John Doe";
      //console.log(getCookie("username"));
    },
    submitted(){
    this.isSubmitted = true
    var hashPassSub = encrypt(this.userData.password)
    console.log(hashPassSub)
    console.log(decrypt(hashPassSub))
    window.alert("Envoyé")
  }
  }
};
</script>
<style scoped>
.separator {
  margin-left: 110px;
  border: 1px solid transparent;
}

.email,
.password {
  margin-bottom: 10px;
  text-align: left;
  font-size: 15px;
  color: #dcddde;
}

.wrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 580px;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
}

.wrapper_box {
  min-height: 380px;
  margin: 0 auto;
  width: 784px;
  height: 100px;
  background-color: #36393f;
  border: 2px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
}

.wrapper_form {
  margin-top: 10px;
}

.left_box {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  margin-left: 20px;
}

.right_box {
  position: relative;
  overflow: hidden;
  width: 240px;
  height: 344px;
  display: flex;
  margin-right: 50px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.titre {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
}

body {
  line-height: 1;
}

input {
  padding: 10px;
  height: 40px;
  border: none;
  background-color: #303338;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  color: #dcddde;
}
a,
h2,
p {
  font-family: "Helvetica Neue", serif;
}
</style>
<style>
body {
  background-image: url("../assets/background_login.jpeg");
}
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>