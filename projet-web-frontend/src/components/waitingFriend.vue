<template>
  <div class="main-container">
    <header>
      <h2>En attente d'amis</h2>
      <div class="sous-titre">
        Il n'y a aucune demande d'ami en attente. Essaye de manger des curlys!
      </div>
      <div class="request">
          <div class="left-box">
            <div class="img">
                <img src="@/assets/check.png" alt="check">
                </div>
            <div class="pseudo-text">
                <div class="pseudo">pseudo</div>
                <div class="text"><p>Demande d'ami reçue</p></div>
            </div>
          </div>
          <div class="right-box">
              <button class="yes">
                <img src="@/assets/check.png" alt="check">
            </button>
            <button class="no">
                <img src="@/assets/croix.png" alt="croix">
            </button>
          </div>
      </div>
    </header>
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
.sous-titre{
    color: white;
    color: #b9bbbe;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
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
  color: yellow;
}

.request{
    display: flex;
    width: 100%;
}
.left-box{
    display: flex;
    width: 50%;
}
img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    
}
.pseudo-text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.pseudo{
    color: white;
    font-size: 100%;
    font-weight: bold;
}
.text{
    color: #b9bbbe
    
}
.right-box{
    display: flex;
    justify-content: flex-end;
    width: 50%;
    color: white;

 
}
.yes{
    margin: 0%;
    margin-right: 5%;
    padding: 4%;
    padding-right: 0%;

     
background-color: #36393e; 
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 4px;
  cursor: pointer;
  border-radius: 50%;

}
.yes {
  transition-duration: 0.4s;
}

.no{
  margin: 0%;
    margin-right: 5%;
    padding: 4%;
    padding-right: 0%;

     
background-color: #36393e; 
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 4px;
  cursor: pointer;
  border-radius: 50%;

 
}




</style>