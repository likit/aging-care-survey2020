import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import firebaseConfig from '@/firebaseConfig.js';
import firebase from 'firebase';

Vue.use(Buefy)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
