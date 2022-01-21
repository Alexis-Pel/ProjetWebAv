<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Nest user List App Tutorial</h1>
      <p>Built with Nest.js, Vue.js, and MongoDB</p>
      <div v-if="users.length === 0">
        <h2>No user found at the moment</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">pseudo</th>
            <th scope="col">Email</th>
            <th scope="col">hashPassword</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">created_date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.pseudo }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.hashPassword }}</td>
            <td>{{ user.description }}</td>
            <td>{{ user.img }}</td>
            <td>{{ user.created_at }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link :to="{name: 'Edit', params: {id: user._id}}" class="btn btn-sm btn-outline-secondary">Edit user</router-link>
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteuser(user._id)">Delete user</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get(`${server.baseURL}/users/users`)
        .then(data => (this.users = data.data));
    }
  }
};
</script>