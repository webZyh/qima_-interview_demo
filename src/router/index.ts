import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Home.vue'
import Add from '../views/add/Add.vue'
import Update from '../views/update/Update.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/mainPage'
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    component: Home
  },
  {
    path: '/creationPage',
    name: 'CreationPage',
    component: Add
  },
  {
    path: '/updatePage/:id',
    name: 'UpdatePage',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
