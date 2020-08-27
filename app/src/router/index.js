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
          meta: {
              title: 'Case Report Online Form'
          }
      },
      {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
              title: 'Home Page',
              requiresAuth: true
          }
      },
      {
          path: '/login',
          name: 'Login',
          component: Login,
          meta: {
              title: 'Log In',
          }
      },
      {
          path: '/profile',
          name: 'Profile',
          component: Profile,
          meta: {
              title: 'Profile',
              requiresAuth: true
          }
      },
      {
          path: '/records',
          name: 'Records',
          component: Record,
          meta: {
              title: 'My Records',
              requiresAuth: true
          }
      },
      {
          path: '/health-record',
          name: 'HealthRecord',
          component: HealthRecord,
          meta: {
              title: 'Form : Health Record',
              requiresAuth: true
          }
      },
      {
          path: '/patient-capital',
          name: 'PatientCapital',
          component: PatientCapital,
          meta: {
              title: 'Form : Patient Captial',
              requiresAuth: true
          }
      },
      {
          path: '/overhead',
          name: 'Overhead',
          component: Overhead,
          meta: {
              title: 'Form : Overhead',
              requiresAuth: true
          }
      },
      {
          path: '/EQ-5D-5L',
          name: 'EQ5D5L',
          component: EQ5D5L,
          meta: {
              title: 'Form : EQ-5D-5L',
              requiresAuth: true
          }
      },
      {
          path: '/VAS',
          name: 'VAS',
          component: VAS,
          meta: {
              title: 'Form : VAS',
              requiresAuth: true
          }
      },
      {
          path: '/MMSE',
          name: 'MMSE',
          component: MMSE,
          meta: {
              title: 'Form : MMSE',
              requiresAuth: true
          }
      },
      {
          path: '/hospital/add',
          name: 'Hospital',
          component: HospitalInfo,
          meta: {
              title: 'Hospital Info',
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

