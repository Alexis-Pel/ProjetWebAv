import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import CreationComponent from '@/views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { path: '/login', name: 'login', component: HomeComponent },
    { path: '/register', name: 'register', component: CreationComponent}
  ]
});