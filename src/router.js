import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from './views/About.vue'
import Children from './views/Children.vue'
import Men from './views/Men.vue'
import Woman from './views/Woman.vue'
import Login from './components/Login.vue'
import firebase from 'firebase';


Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/children",
      name: "children",
      component: Children
    },
    {
      path: "/men",
      name: "Men",
      component: Men
    },
    {
      path: "/woman",
      name: "Woman",
      component: Woman
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
  ]
});

export default router;
