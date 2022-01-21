<template>
  <div id="app">
    <router-view></router-view>
    
    
  </div>
</template>

<script>
export default {
  components: {},

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