import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from "@/views/Landing"
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from "../views/Profile"
import HealthRecord from "../views/HealthRecord"
import PatientCapital from "../views/PatientCapital"
import Record from "../views/Record";
import Overhead from "../views/Overhead"
import EQ5D5L from "../views/EQ5D5L"
import VAS from "../views/VAS"
import MMSE from "../views/MMSE"
import store from "../store"
import HospitalInfo from "@/views/HospitalInfo"

Vue.use(VueRouter)

  const routes = [
      {
          path: '/',
          name: 'Landing',
          component: Landing,
      },
      {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
              requiresAuth: true
          }
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
          path: '/records',
          name: 'Records',
          component: Record,
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
          component: Overhead,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/EQ-5D-5L',
          name: 'EQ5D5L',
          component: EQ5D5L,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/VAS',
          name: 'VAS',
          component: VAS,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/MMSE',
          name: 'MMSE',
          component: MMSE,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/hospital/add',
          name: 'Hospital',
          component: HospitalInfo,
          meta: {
              requiresAuth: true
          }
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
    if(requiresAuth === true && store.getters.isUserLoggedIn === false) {
        next('/login')
    } else {
        next()
    }
})

export default router

