import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from "../views/Profile"
import HealthRecord from "../views/HealthRecord"
import PatientCapital from "../views/PatientCapital"
import Overhead from "../views/Overhead"
import EQ5D5L from "../views/EQ5D5L"
import VAS from "../views/VAS"
import MMSE from "../views/MMSE"
import store from "../store"

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
          component: Profile,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/health-record',
          name: 'HealthRecord',
          component: HealthRecord,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/patient-capital',
          name: 'PatientCapital',
          component: PatientCapital,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/overhead',
          name: 'Overhead',
          component: Overhead
      },
      {
          path: '/EQ-5D-5L',
          name: 'EQ5D5L',
          component: EQ5D5L
      },
      {
          path: '/VAS',
          name: 'VAS',
          component: VAS
      },
      {
          path: '/MMSE',
          name: 'MMSE',
          component: MMSE
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

router.beforeEach((to, from, next)=>{
    const requiresAuth = to.matched.some(x=>x.meta.requiresAuth)
    if(requiresAuth === true && store.state.loggedIn === false) {
        next('/login')
    } else {
        next()
    }
})

export default router

