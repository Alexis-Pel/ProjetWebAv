<template>
  <div class="main-container">
    <header>
      <h2>Ajouter un ami</h2>
      <form>
        <div
          style="
            color: white;
            color: #b9bbbe;
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
          "
        >
          Tu peux ajouter un ami grâce à son Discord Tag. Attention aux
          mAjUsCuLeS !
        </div>
        <div
          style="
            width: 100%;
            background-color: #303338;
            border: 1px solid #232427;
            margin-top: 16px;
            padding: 0 12px;
            border-radius: 8px;
            flex: 1 1 auto;
            display: flex;
            margin-right: 16px;
            padding: 4px 0;
            padding-left: 8px;
          "
        >
          <input placeholder="Entre un nom d'utilisateur" />
          <button type="submit" disabled="" class="">
            <div>Envoyer une demande d'ami</div>
          </button>
        </div>
      </form>
    </header>
    <div></div>
  </div>
</template>

<style scoped>
button {
  cursor: not-allowed;
  width: auto;
  height: 32px;
  min-width: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #444c96;
  color: white;
  opacity: 0.5;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 2px 16px;
  min-height: 32px;
  width: auto;
  margin-top: 5px;
  margin-right: 10px;
}
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
input {
  align-items: center;
  color: #72767c;
  background-color: transparent;
  display: flex;
  position: relative;
  font-family: "Helvetica Neue";
  width: 68%;
  border: none;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 20px;
  white-space: pre;
  height: 40px;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>