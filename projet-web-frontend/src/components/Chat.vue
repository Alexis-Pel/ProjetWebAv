<template>
  <div class="chat">
    <div class="titleImg">
      <img class="titleImg" :src="title.img" alt="imgConv" />
    </div>
    <div class="title">
      <h1>{{ title.tableName }}</h1>
    </div>
    <div class="welcome"><h6>Bienvenue au début du groupe privé</h6></div>
    <div v-for="message in messages" :key="message.id">
      <div class="container">
        <div class="img">
          <img class="img" :src="message.img" alt="imgProfil" />
        </div>
        <div class="block-message">
          <div class="pseudo-date">
            <p class="pseudo">{{ message.pseudo }}</p>
            <p class="date">{{ message.date }}</p>
          </div>
          <div class="content">
            <p class="message">{{ message.message }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="divInput"><input class="input" type="text" :placeholder="title.input" /></div>
  </div>
</template>

<script>
export default {
  name: "chat",
  data() {
    return {
      messages: [
        {
          img: "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/people/la-vie-des-people/news/le-beau-gosse-de-la-semaine-du-13-11-09-est-robert-pattinson/12736805-1-fre-FR/Le-beau-gosse-de-la-semaine-du-13-11-09-est-Robert-Pattinson.jpg",
          pseudo: "piou",
          date: "15/12/2002",
          message: "coucou cva",
          id: 0,
        },
        {
          img: "https://img.lemde.fr/2013/09/13/0/0/658/368/1872/1046/30/0/ill_3477116_039b_blobfish.jpg",
          pseudo: "test",
          date: "15/12/2002",
          message: "oui et toi",
          id: 1,
        },
        {
          img: "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/people/la-vie-des-people/news/le-beau-gosse-de-la-semaine-du-13-11-09-est-robert-pattinson/12736805-1-fre-FR/Le-beau-gosse-de-la-semaine-du-13-11-09-est-Robert-Pattinson.jpg",
          pseudo: "piou",
          date: "15/12/2002",
          message: "Non ma grand-mère est morte :'(",
          id: 2,
        },
        {
          img: "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/people/la-vie-des-people/news/le-beau-gosse-de-la-semaine-du-13-11-09-est-robert-pattinson/12736805-1-fre-FR/Le-beau-gosse-de-la-semaine-du-13-11-09-est-Robert-Pattinson.jpg",
          pseudo: "piou",
          date: "15/12/2002",
          message: "j'suis triste",
          id: 3,
        },
        {
          img: "https://img.lemde.fr/2013/09/13/0/0/658/368/1872/1046/30/0/ill_3477116_039b_blobfish.jpg",
          pseudo: "test",
          date: "15/12/2002",
          message: "BAH MANGE TES MORTS!!!",
          id: 4,
        },
        {
          img: "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/people/la-vie-des-people/news/le-beau-gosse-de-la-semaine-du-13-11-09-est-robert-pattinson/12736805-1-fre-FR/Le-beau-gosse-de-la-semaine-du-13-11-09-est-Robert-Pattinson.jpg",
          pseudo: "piou",
          date: "15/12/2002",
          message: "OK bah on est plus copain",
          id: 5,
        },
        {
          img: "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/people/la-vie-des-people/news/le-beau-gosse-de-la-semaine-du-13-11-09-est-robert-pattinson/12736805-1-fre-FR/Le-beau-gosse-de-la-semaine-du-13-11-09-est-Robert-Pattinson.jpg",
          pseudo: "piou",
          date: "15/12/2002",
          message: "fils de pute !!!!",
          id: 6,
        },
        {
          img: "https://i1.sndcdn.com/artworks-swVOMV214dhVjCTW-Sqnx6A-t500x500.jpg",
          pseudo: "Tristan",
          date: "15/12/2002",
          message: "EH! salut cva vous faite quoi ?",
          id: 7,
        },
        {
          img: "https://i1.sndcdn.com/artworks-swVOMV214dhVjCTW-Sqnx6A-t500x500.jpg",
          pseudo: "Tristan",
          date: "15/12/2002",
          message: "mais euh vous voulez pas me répondre ?",
          id: 7,
        },
        {
          img: "https://i1.sndcdn.com/artworks-swVOMV214dhVjCTW-Sqnx6A-t500x500.jpg",
          pseudo: "Tristan",
          date: "15/12/2002",
          message: "Bande de méchant!",
          id: 7,
        },
        {
          img: "https://i1.sndcdn.com/artworks-swVOMV214dhVjCTW-Sqnx6A-t500x500.jpg",
          pseudo: "Tristan",
          date: "15/12/2002",
          message: "NneuNnei!",
          id: 7,
        },
        {
          img: "https://i1.sndcdn.com/artworks-swVOMV214dhVjCTW-Sqnx6A-t500x500.jpg",
          pseudo: "Tristan",
          date: "15/12/2002",
          message: "TA GUEULE !!!",
          id: 7,
        },
      ],
      title: {
        tableName: "voiture",
        img: "https://www.livepeople.fr/wp-content/uploads/2021/09/voitures-les-plus-laides-de-lhistoire-.jpg",
        input: "Envoyer un message dans le voiture",
      },
    };
  },
};
</script>

<style>
.titleImg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.title {
  text-align: left;
  margin-left: 1%;
  padding-left: 1%;
  color: white;
}
.welcome {
  text-align: left;
  margin-left: 1%;
  padding-left: 1%;
  color: #b9bbbe;
}
.chat {
  display: flex;
  height: 100%;
  background-color: rgb(54, 57, 63);
  justify-content: flex-start;
  flex-direction: column;
}
.message {
  color: #dcddde;
}
p {
  margin-left: 10px;
}
.pseudo {
  color: white;
}
.date {
  color: gray;
}
div.text {
  display: flex;
}
div.img {
  display: flex;
}
.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.block-message {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.container {
  display: flex;
  margin-left: 1%;
  padding-left: 1%;
}
.pseudo-date {
  display: flex;
}
.content {
  text-align: left;
}
.divInput{
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(54, 57, 63);
    height: 7%;
    width: 100%;
    position: fixed;
    bottom: 0;
}
.input {
  width: 95.0001%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.192);
  border-radius: 5px;
  text-align: center;
  color: gray;
  border: 0;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  overflow: hidden;
  
}

html,
body {
  background-color: rgb(54, 57, 63);
  height: 122.5%;
  overflow: visible;
}
/* izhdbzzb */

</style>