import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import CreationComponent from '@/views/Register'
import FriendList from '@/views/Container_FriendList'
import Settings from '@/views/Settings'
import ChatComponent from '@/components/Chat'
import SettingsMessages from '@/views/SettingsMessages'

import Group from '@/views/Group'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { path: '/login', name: 'login', component: HomeComponent },
    { path: '/register', name: 'register', component: CreationComponent},
    { path: '/friends', name: 'friends', component: FriendList},
    { path: '/settings', name: 'settings', component: Settings},
    { path: '/chat', name: 'chat', component: ChatComponent},
    { path: '/settingsMessages', name: 'settingsMessages', component: SettingsMessages},
    { path: '/group', name: 'group', component: Group},
  ]
});