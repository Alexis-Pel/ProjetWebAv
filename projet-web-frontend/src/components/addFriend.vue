<template>
  <div class="main-container">
    <header>
      <h2>Ajouter un ami</h2>
      <div
        style="
          color: white;
          color: #b9bbbe;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
        "
      >
        Tu peux ajouter un ami grâce à son Discord Tag. Attention aux mAjUsCuLeS
        !
      </div>
      <form></form>
    </header>
    <div></div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 8px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 600;
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  border-bottom: 1px solid #424549;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  width: 100%;
}
.main-container {
  width: 100%;
  height: 100%;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  display: flex;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline;
  background-color: #36393e;
}
</style>