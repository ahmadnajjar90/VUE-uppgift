import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase';
import './components/firebaseInit';
import store from "./store/store";


Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
