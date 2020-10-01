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
                <a href="index.html"
                  ><img src="img/logo.png" alt="Jolet Empire Logo"
                /></a>
              </div>
            </div>

            <!--Nav Box-->
            <div class="nav-outer clearfix">
              <!--Mobile Navigation Toggler For Mobile-->
              <div class="mobile-nav-toggler">
                <span class="icon flaticon-menu-1"></span>
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
                    <span class="icon flaticon-menu-1"></span>
                  </button>
                </div>

                <div
                  class="collapse navbar-collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul class="navigation clearfix">
                    <li class="current dropdown">
                      <a href="#"><router-link to="/">Home</router-link></a>
                    </li>
                    <li class="dropdown">
                      <a class="smoothscroll" href="#how-it-works">About</a>
                    </li>

                    <li class="dropdown">
                      <a href="#"><router-link to="/faq">FAQ</router-link></a>
                    </li>
                    <li class="dropdown">
                      <a href="#"
                        ><router-link to="/login">Login</router-link></a
                      >
                    </li>

                    <li class="dropdown">
                      <a href="#"
                        ><router-link to="/signup">Signup</router-link></a
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

      <!-- Mobile Menu  -->
      <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn">
          <span class="icon flaticon-cancel"></span>
        </div>

        <nav class="menu-box">
          <div class="nav-logo">
            <a href="index.html"
              ><img src="img/logo.png" alt="Jolet Empire Logo" title=""
            /></a>
          </div>
          <ul class="navigation clearfix">
            <!--Keep This Empty / Menu will come through Javascript-->
          </ul>
        </nav>
      </div>
      <!-- End Mobile Menu -->
    </header>
    <!-- End Main Header -->
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
</style>
