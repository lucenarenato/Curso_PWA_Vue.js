// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

let config = {
    apiKey: "AIzaSyDHCEW8XEFtKHuaqZElVURTWz6m_Uy4sN8",
    authDomain: "vue-pwa-f6654.firebaseapp.com",
    databaseURL: "https://vue-pwa-f6654.firebaseio.com",
    projectId: "vue-pwa-f6654",
    storageBucket: "vue-pwa-f6654.appspot.com",
    messagingSenderId: "224748908327"
  };
  firebase.initializeApp(config);

push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
