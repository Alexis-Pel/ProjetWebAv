<template>
  
  <div class="container">
      <h1>test</h1>

      <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th>pseudo</th>
          <th>email</th>
          <th>img</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user_alias in User" v-bind:key="user_alias">
          <td>{{ user_alias.pseudo }}</td>
          <td>{{ user_alias.email }}</td>
          <td>{{ user_alias.img}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'user',
    data(){
        return{
            User: [],
        }
    },
    mounted(){

    }
}
</script>

<style>
.h1{
    font: 100;
}
</style>