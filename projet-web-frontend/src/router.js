import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import CreationComponent from '@/views/Register'
import FriendList from '@/views/Container_FriendList'
import Settings from '@/views/Settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { path: '/login', name: 'login', component: HomeComponent },
    { path: '/register', name: 'register', component: CreationComponent},
    { path: '/friends', name: 'friends', component: FriendList},
    { path: '/settings', name: 'settings', component: Settings}
  ]
});