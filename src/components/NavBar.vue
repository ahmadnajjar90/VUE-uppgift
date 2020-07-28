<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-white d-none d-lg-block py-3">
      <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="col d-flex justify-content-left">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/men" class="nav-link border-end custom-left-padding">MAN</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/woman" class="nav-link border-end">KVINNA</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/children" class="nav-link custom-line-height">BARN</router-link>
            </li>
          </ul>
        </div>
        <div class="col d-flex justify-content-center">
          <router-link to="/" class="navbar-brand mx-auto">
            <img src="@/assets/images/logo.png" class="logo" />
          </router-link>
        </div>
        <div class="col d-flex justify-content-end">
          <ul class="navbar-nav custom-right-padding">
            <li v-if="isLoggedIn" class="nav-item">
              
            </li>
            <li v-if="!isLoggedIn" class="nav-item" @click="toggleLogin">
              <span class="nav-link">Loggain</span>
            </li>
            <li class="nav-item" v-on:click="toggleSmallCart">
              <span class="nav-link" href="#">
                <i class="fas fa-shopping-bag"></i>
                <span class="" id="itemsInCart"><span class="badge badge-pill badge-danger">{{ getCartLength }}</span></span>
              </span>
            </li>
            <li v-if="isLoggedIn" class="nav-item" v-on:click="logout">
              <span class="nav-link">Loggadin </span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  </div>
</template>
 
 <script>

import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import firebase from 'firebase'

Vue.use(vClickOutside)


export default {
  name: "NavBar",
  components: {
  },
  data: function() {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  
};
</script>
 <style>

 nav {
   position: relative;
 }
 
.logo {
  width: 125px;
  height: 40px;
}

.border-end {
  border: 1px solid black;
  border-width: 0 1px 0 0;
  line-height: 2px;
}

.custom-line-height {
  line-height: 2px;
}

span {
  font-weight: 100;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.custom-left-padding {
  margin-left: -23px;
}

.custom-right-padding {
   margin-right: -23px;
}

.nav-item {
  cursor: pointer;
}

</style>