import Vue from 'vue'
import VueRouter from 'vue-router'
import PatientApp from '../views/PatientApp.vue'
import Login from '../views/Login.vue'
import Diary from '../views/nestedPatientViews/Diary.vue'
import Profile from '../views/nestedPatientViews/Profile.vue'
import Recipes from '../views/nestedPatientViews/Recipes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }, 
  {
    path: "/patientApp",
    name: "PatientApp", 
    component: PatientApp, 
    children: [
      {
        path: 'diary', 
        name: 'Diary',
        component: Diary,
      }, 
      {
        path: 'profile', 
        name: 'Profile',
        component: Profile
      }, 
      {
        path: 'recipes',
        name: 'Recipes',
        component: Recipes
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router