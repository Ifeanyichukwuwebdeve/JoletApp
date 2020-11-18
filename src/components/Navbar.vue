<template>
  <div class="Navbar">
    <header class="main-header header-style-one">
      <!-- Header Upper -->
      <div class="header-upper">
        <div class="inner-container">
          <div class="auto-container clearfix">
            <!--Info-->
            <div class="logo-outer">
              <div class="logo">
                <a href="#"
                  ><img src="img/logo.png" alt="Jolet Empire Logo"
                /></a>
              </div>
            </div>

            <!--Nav Box-->
            <div class="nav-outer clearfix">
              <!--Mobile Navigation Toggler For Mobile-->
              <div class="mobile-nav-toggler">
                <span @click="$bvModal.show('bv-modal-example')"  class="icon flaticon-menu-1"></span>
              </div>
              <nav class="main-menu navbar-expand-md navbar-light">
                <div class="navbar-header">
                  <!-- Togg le Button -->
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span id="show-btn" class="icon flaticon-menu-1"></span>
                  </button>
                </div>
                <!-- Mobile -->
                <b-modal id="bv-modal-example" class="text-center" hide-footer>
                  <template #modal-title>
                    <nav class="menu-box">
                      <ul class="navigation clearfix">
                      <li class="dropdown">
                      <a href="#"
                        ><router-link to="/">Home</router-link></a
                      >
                    </li>
                    <li class="dropdown" v-if="!user.token">
                      <a href="#"
                        ><router-link to="/login">Login</router-link></a
                      >
                    </li>

                    <li class="dropdown anchor" v-if="!user.token">
                      <a href="#"
                        ><router-link to="/signup">Signup</router-link></a
                      >
                    </li>

                    <li class="dropdown anchor" v-if="user.token">
                      <a href="#"
                        ><router-link to="/dashboard"><i class="fas fa-user-circle"></i><span>{{user.firstName}}</span></router-link></a
                      >
                    </li>

                    <li class="dropdown anchor" v-if="user.token">
                      <a href="#"
                      @click="logout"
                        >Log out</a
                      >
                    </li>
                  </ul>
                    </nav>
                  </template>
                </b-modal>
                <!-- Nav -->
                <div
                  class="collapse navbar-collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul class="navigation clearfix">
                    <li class="dropdown">
                      <a href="#"
                        ><router-link to="/">Home</router-link></a
                      >
                    </li>
                    <li class="dropdown" v-if="!user.token">
                      <a href="#"
                        ><router-link to="/login">Login</router-link></a
                      >
                    </li>

                    <li class="dropdown anchor" v-if="!user.token">
                      <a href="#"
                        ><router-link to="/signup">Signup</router-link></a
                      >
                    </li>

                    <li class="dropdown anchor" v-if="user.token">
                      <a href="#"
                        ><router-link to="/dashboard"><i class="fas fa-user-circle"></i><span>{{user.firstName}}</span></router-link></a
                      >
                    </li>

                    <li class="dropdown anchor" v-if="user.token">
                      <a href="#"
                      @click="logout"
                        >Log out</a
                      >
                    </li>
                  </ul>
                </div>
              </nav>
              <!-- Main Menu End-->
            </div>
          </div>
        </div>
      </div>
      <!--End Header Upper-->
    </header>
    <!-- End Main Header -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['logUserOut']),
    logout () {
      this.logUserOut()
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style>
.nav-logo img{
  width: 50px;
  width: 122px;
}
</style>
