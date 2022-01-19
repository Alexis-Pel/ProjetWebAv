<template>
  <div>
    <div class="wrapper">
      <div class="wrapper_box">
        <div class="left_box">
          <div class="titre">
            <h2 style="color: #fff; font-size: 25px; font-weight: 600">Ha, te revoila !</h2>
            <p style="color: #b9bbbe">Nous sommes si heureux de te revoir !</p>
          </div>
          <div class="wrapper_form">
            <div class="email">
              <p style="margin-bottom: 5px">E-MAIL</p>
              <input v-model="email" placeholder="">
            </div>
            <div class="password">
              <p>MOT DE PASSE</p>
              <input v-model="password" placeholder="">
              <button type="button" class="forget_button"><div style="font-size: 100%; color: #01aef4">Tu as oublié ton mot de passe ?</div></button>
            </div>
            <button type="submit" style="background-color: #5765f2; font-size: 16px; line-height: 24px;margin-bottom: 8px;font-weight: 500;cursor: pointer;width: 100%;height: 44px;">
              <div style="color: #fff">
                Se connecter
              </div>
            </button>
            <div style="text-align: left;">
              <span style="font-size: 14px;line-height: 16px;color: #5765f2; margin-right: 5px">Besoin d'un compte ?</span>
              <button type="button">
                <div style="color: #01aef4">
                  S'inscrire
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="right_box">
          <img src="@/assets/qrcode_discord.png" style="" alt="">
          <h3 style="color: #ffffff; font-weight: 600; font-size: 20px">Se connecter avec un code QR</h3>
          <div style="font-weight: 600; font-size: 12px; color: #b9bbbe">
            Scanne-le avec l'<strong>application mobile Discord</strong> pour te connecter instantanément.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
  }
}
</script>
<style scoped>

.separator{
  margin-left: 110px;
  border: 1px solid transparent;
}

.email, .password{
  margin-bottom: 20px;
  text-align: left;
  font-size: 15px;
  color: #dcddde;
}

.wrapper{
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

.wrapper_box{
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

.wrapper_form{
  margin-top: 10px;
}

.left_box{
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  margin-left: 20px;
}

.right_box{
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

.titre{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
}

body{
  line-height: 1;
}

input{
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
a, h2, p {
  font-family: "Helvetica Neue",serif;
}
</style>
<style>
body{
  background-image: url("../assets/background_login.jpeg");
}
html, body {margin: 0; height: 100%; overflow: hidden}
</style>