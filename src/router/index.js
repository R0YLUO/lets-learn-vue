import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Diary from '../views/Diary.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }, 
  {
    path: "/diary",
    name: "Diary", 
    component: Diary
  }, 
  {
    path: "/profile", 
    name: "Profile", 
    component: Profile
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router