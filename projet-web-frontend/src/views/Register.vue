<template>
  <div>
    <div class="wrapper">
      <div
        class="wrapperBox"
        style="opacity: 1; transform: scale(1) translateY(0px) translateZ(0px)"
      >
        <div class="authbox">
          <div class="centerinWrapper">
            <h3 class="title">Créer un compte</h3>
            <div class="block">
              <div class="sousBlock">
                <h5 class="sousTitre">E-MAIL</h5>
                <div class="inputWrapper">
                  <input
                    @click="emailError = ''"
                    v-model="userData.email"
                    class="inputDefault"
                    name="email"
                    type="email"
                    placeholder
                    aria-label="E-mail"
                    maxlength="999"
                  />
                  <p style="color: red; font-size: 10px">{{ emailError }}</p>
                </div>
              </div>
              <div class="sousBlock">
                <h5 class="sousTitre">NOM D'UTILISATEUR</h5>
                <div class="inputWrapper">
                  <input
                    @click="pseudoError = ''"
                    v-model="userData.pseudo"
                    class="inputDefault"
                    name="username"
                    type="text"
                    placeholder
                    aria-label="Nom d'utilisateur"
                    maxlength="999"
                    value
                  />
                  <p style="color: red; font-size: 10px">{{ pseudoError }}</p>
                </div>
              </div>
              <div class="sousBlock">
                <h5 class="sousTitre">MOT DE PASSE</h5>
                <div class="inputWrapper">
                  <input
                    @click="passwordError = ''"
                    v-model="userData.hashPassword"
                    class="inputDefault"
                    name="password"
                    type="password"
                    placeholder
                    aria-label="Mot de passe"
                    maxlength="999"
                    value
                  />
                </div>
                <p style="color: red; font-size: 10px">{{ passwordError }}</p>
              </div>

              <div class="sousBlockDate">
                <h5 class="sousTitre">DATE DE NAISSANCE</h5>
                <label for="jour"></label>
                <select
                  v-model="userData.jour"
                  class="selectJour"
                  id="jour"
                  name="jour"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <label for="mois"></label>
                <select
                  v-model="userData.mois"
                  class="selectMois"
                  id="mois"
                  name="mois"
                >
                  <option value="1">janvier</option>
                  <option value="2">février</option>
                  <option value="3">mars</option>
                  <option value="4">avril</option>
                  <option value="5">mai</option>
                  <option value="6">juin</option>
                  <option value="7">juillet</option>
                  <option value="8">août</option>
                  <option value="9">septembre</option>
                  <option value="10">octobre</option>
                  <option value="11">novembre</option>
                  <option value="12">décembre</option>
                </select>
                <label for="annee"></label>
                <select
                  v-model="userData.annee"
                  class="selectAnnee"
                  id="annee"
                  name="annee"
                >
                  <option value="1900">1900</option>
                  <option value="1901">1901</option>
                  <option value="1902">1902</option>
                  <option value="1903">1903</option>
                  <option value="1904">1904</option>
                  <option value="1905">1905</option>
                  <option value="1906">1906</option>
                  <option value="1907">1907</option>
                  <option value="1908">1908</option>
                  <option value="1909">1909</option>
                  <option value="1910">1910</option>
                  <option value="1911">1911</option>
                  <option value="1912">1912</option>
                  <option value="1913">1913</option>
                  <option value="1914">1914</option>
                  <option value="1915">1915</option>
                  <option value="1916">1916</option>
                  <option value="1917">1917</option>
                  <option value="1918">1918</option>
                  <option value="1919">1919</option>
                  <option value="1920">1920</option>
                  <option value="1921">1921</option>
                  <option value="1922">1922</option>
                  <option value="1923">1923</option>
                  <option value="1924">1924</option>
                  <option value="1925">1925</option>
                  <option value="1926">1926</option>
                  <option value="1927">1927</option>
                  <option value="1928">1928</option>
                  <option value="1929">1929</option>
                  <option value="1930">1930</option>
                  <option value="1931">1931</option>
                  <option value="1932">1932</option>
                  <option value="1933">1933</option>
                  <option value="1934">1934</option>
                  <option value="1935">1935</option>
                  <option value="1936">1936</option>
                  <option value="1937">1937</option>
                  <option value="1938">1938</option>
                  <option value="1939">1939</option>
                  <option value="1940">1940</option>
                  <option value="1941">1941</option>
                  <option value="1942">1942</option>
                  <option value="1943">1943</option>
                  <option value="1944">1944</option>
                  <option value="1945">1945</option>
                  <option value="1946">1946</option>
                  <option value="1947">1947</option>
                  <option value="1948">1948</option>
                  <option value="1949">1949</option>
                  <option value="1950">1950</option>
                  <option value="1951">1951</option>
                  <option value="1952">1952</option>
                  <option value="1953">1953</option>
                  <option value="1954">1954</option>
                  <option value="1955">1955</option>
                  <option value="1956">1956</option>
                  <option value="1957">1957</option>
                  <option value="1958">1958</option>
                  <option value="1959">1959</option>
                  <option value="1960">1960</option>
                  <option value="1961">1961</option>
                  <option value="1962">1962</option>
                  <option value="1963">1963</option>
                  <option value="1964">1964</option>
                  <option value="1965">1965</option>
                  <option value="1966">1966</option>
                  <option value="1967">1967</option>
                  <option value="1968">1968</option>
                  <option value="1969">1969</option>
                  <option value="1970">1970</option>
                  <option value="1971">1971</option>
                  <option value="1972">1972</option>
                  <option value="1973">1973</option>
                  <option value="1974">1974</option>
                  <option value="1975">1975</option>
                  <option value="1976">1976</option>
                  <option value="1977">1977</option>
                  <option value="1978">1978</option>
                  <option value="1979">1979</option>
                  <option value="198O">1980</option>
                  <option value="1981">1981</option>
                  <option value="1982">1982</option>
                  <option value="1983">1983</option>
                  <option value="1984">1984</option>
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </select>
                <p style="color: red; font-size: 10px">{{ dateError }}</p>
              </div>

              <div class="sousBlock">
                <div class="checkbox">
                  <input
                    style="width: 24px; height: 24px; background-color: #72767d"
                    @click="
                      condtionError = '';
                      changeButtonColor();
                    "
                    v-model="userData.condition"
                    class="checkboxInput"
                    type="checkbox"
                    id="condG"
                    name="condG"
                  />
                  <label class="checkboxLabel" for="condG"
                    >J'ai lu et accepté les
                    <a href="">Conditions d'utilisation</a> et la
                    <a href="">Politique de Confidentialité</a> de
                    Discord.</label
                  >
                </div>
                <p style="color: red; font-size: 10px">{{ condtionError }}</p>
              </div>

              <div class="sousBlock">
                <button
                  disabled
                  id="continueButton"
                  @click="validateCred()"
                  type="submit"
                  class="button"
                  style="
                    border-radius: 5px;
                    text-decoration: none;
                    display: inline-block;
                    border: none;
                    opacity: 0.6;
                    cursor: not-allowed;
                  "
                >
                  <div class="buttonContinuer">Continuer</div>
                </button>
              </div>
              <button
                type="button"
                class="buttonEnd"
                style="
                  text-decoration: none;
                  display: inline-block;
                  border: none;
                  background-color: #36393f;
                "
              >
                <router-link to="/login" class="buttonEnd"
                  >Tu as déjà un compte ?</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-if="isSubmitted">
      <div class="card-body">
        <h4 class="card-title">Form Data</h4>
        <p>
          Pseudo: <b>{{ userData.pseudo }}</b>
        </p>
        <p>
          Mail: <b>{{ userData.email }}</b>
        </p>
        <p>
          jour de naissance: <b>{{ userData.jour }}/{{ userData.mois }}/{{ userData.annee }}</b>
        </p>
        <p>
          Password: <b>{{ userData.password }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//import { join } from 'path';
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { encrypt } from "../assets/js/encryption";
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      userData: {
        email: "",
        hashPassword: "",
        pseudo: "",
        jour: "",
        mois: "",
        annee: "",
        condition: false,
      },
      emailError: "",
      passwordError: "",
      condtionError: "",
      pseudoError: "",
      dateError: "",
      isSubmitted: false,
      continueBackgroundColor: "",
    };
  },

  methods: {
    submitted() {
      this.isSubmitted = true;
      this.createUserDatabase();
    },
    async createUserDatabase() {
      var username = this.userData.pseudo;
      var email = this.userData.email;
      var password = encrypt(this.userData.hashPassword);
      await axios.post(`${server.baseURL}/users/create`, {
        pseudo: username,
        email: email,
        hashPassword: password,
        img: null,
        friends: null,
        description: "",
      });
    },
    changeButtonColor() {
      if (this.userData.condition != true) {
        document.getElementById("continueButton").style.opacity = "1";
        document.getElementById("continueButton").disabled = false;
        document.getElementById("continueButton").style.cursor = "default";
      } else {
        document.getElementById("continueButton").style.opacity = "0.6";
        document.getElementById("continueButton").disabled = true;
        document.getElementById("continueButton").style.cursor = "default";
      }
    },
    validateCred() {
      const mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.userData.hashPassword == "") {
        this.passwordError = "Password cannot be empty.";
        return;
      }
      if (this.userData.pseudo == "") {
        this.pseudoError = "Nom utilisateur cannot be empty.";
        return;
      }
      if (this.userData.condition === false) {
        this.conditionError = "Veuillez accepter les conditions générales.";
        return;
      }

      var j = this.userData.jour;
      var m = this.userData.mois;
      var a = this.userData.annee;
      var fev;
      if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
        fev = 29;
      } else {
        fev = 28;
      }

      const nbJours = Array(31, fev, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
      if ((m >= 1 && m <= 12 && j >= 1 && j <= nbJours[m - 1] && a !="") == false) {
        this.dateError = "Veuillez entrer une date existante.";
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
    },
  },
};
</script>


<style scoped>
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

.wrapperBox {
  background-color: #36393f;
  border-radius: 5px;
}

.authbox {
  width: 480px;
  padding: 32px;
  font-size: 18px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  box-sizing: border-box;
  box-sizing: border-box;
}

.title {
  color: lavender;
  font-weight: bold;
  font-size: 25px;
}

.block {
  width: 100%;
  text-align: left;
}

.sousBlock {
  margin-top: 20px;
}
.sousBlockDate {
  margin-top: 20px;
}
.sousTitre {
  margin-bottom: 5px;
  text-align: left;
  font-size: 13px;
  color: #dcddde;
  font-weight: bold;
}

.inputDefault {
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

.checkbox {
  display: flex;
  margin: 0;
  padding: 0;
  color: #dcddde;
}

.checkbox a {
  color: #01aef4;
}

.checkboxInput {
  height: 25px;
}
.checkboxLabel {
  font-size: 12px;
  padding-left: 10px;
}

select {
  background-color: #303338;
  color: #dcddde;
  padding: 10px;
  border-radius: 3px;
}

.selectJour {
  width: 22%;
  margin-right: 5%;
}
.selectMois {
  width: 38%;
  margin-right: 5%;
}
.selectAnnee {
  width: 30%;
}

.button {
  background-color: #5765f2;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  height: 44px;
}

.buttonContinuer {
  color: lavender;
  font-weight: bold;
}

.buttonEnd {
  color: #01aef4;
  font-size: 15px;
}

.wrapper {
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