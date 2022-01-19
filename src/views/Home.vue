<template>
  <div>
    <div class="wrapper">
      <div class="wrapper_box">
        <div class="left_box">
          <h2 style="color: white">Ha, te revoila !</h2>
        </div>
        <div class="right_box">
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
}
body{
  line-height: 1;
}
</style>