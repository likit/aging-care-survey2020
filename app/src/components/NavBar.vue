<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="../assets/moph.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{path: '/'}">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{name: 'Hospital'}">
        Hospital
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path: '/profile'}">
        Profile
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path: '/records'}">
        My Records
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item v-if="userLoggedIn">
        <button class="button is-info is-outlined is-medium">
                <span class="icon">
                  <i class="fas fa-user"></i>
                </span>
          <span>
                  {{ userProfile.data.fullname }}
                </span>
        </button>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link class="button is-light is-medium" to="/login" v-if="userLoggedIn!==true">
            <strong>Log in</strong>
          </router-link>
          <a class="button is-danger is-medium" v-else @click="logout()">
            <span class="icon">
                <i class="fas fa-power-off"></i>
            </span>
            <span><strong>Log out</strong></span>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import router from '../router/index'
import {auth} from '../firebase'
import {mapState} from 'vuex'

export default {
  computed: {
    userLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    ...mapState(['userProfile'])
  },
  methods: {
    logout() {
      let self = this;
      auth.signOut().then(() => {
        self.$store.dispatch('logoutUser')
      })
      router.push('/login');
    }
  }
}
</script>