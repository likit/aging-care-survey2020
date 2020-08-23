<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/home">
                Home
            </b-navbar-item>
            <b-navbar-item href="/profile">
                Profile
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item>
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
                    <a class="button is-primary is-medium" v-if="userLoggedIn!==true">
                        <strong>Sign up</strong>
                    </a>
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
import { auth } from '../firebase'
import { mapState } from 'vuex'

export default {
  computed: {
    userLoggedIn() {
      return this.$store.state.user.loggedIn;
    },
    ...mapState(['userProfile'])
  },
  methods: {
    logout() {
      auth.signOut();
      router.push('/');
    }
  }
}
</script>