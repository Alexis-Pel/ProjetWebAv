import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Creation from '../views/Creation.vue'
import Users from '@/components/user' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'Users',
    component: Users
  },
  {
    path: '/Creation',
    name: 'Creation',
    component: Users
  },
  //{
    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
