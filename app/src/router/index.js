import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from "../views/Profile";
import HealthRecord from "../views/HealthRecord";
import PatientCapital from "../views/PatientCapital";
import Overhead from "../views/Overhead";

Vue.use(VueRouter)

  const routes = [
      {
          path: '/home',
          name: 'Home',
          component: Home
      },
      {
          path: '/login',
          name: 'Login',
          component: Login
      },
      {
          path: '/profile',
          name: 'Profile',
          component: Profile
      },
      {
          path: '/health-record',
          name: 'HealthRecord',
          component: HealthRecord
      },
      {
          path: '/patient-capital',
          name: 'PatientCapital',
          component: PatientCapital,
      },
      {
          path: '/overhead',
          name: 'Overhead',
          component: Overhead,
      },
      {
          path: '/about',
          name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
