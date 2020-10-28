<template>
  <div class="home">
    <Navbar />
    <section class="bg-hero">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-12">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-6 order-4 order-sm-4">
                <div class="content-box">
                  <h1>Online Quiz Platform</h1>
                  <div class="text">
                    <p>
                      Jolet Empire is an online quiz platform where
                      users earn money through answeing the questions
                      provided correctly.
                    </p>
                    <div class="btns-box">
                      <a href="" class="theme-btn btn-style-one"
                        ><span class="txt">Get Started</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-6 order-2 order-sm-6">
                <div class="image-column">
                  <div class="image">
                    <img src="/img/hero.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Background -->

    <section class="started-section text-left">
      <div class="auto-container">
        <!-- Sec Title -->
        <div class="sec-title-header pb-2">
          <h2>Get Started. It's easy & fast.</h2>
        </div>

        <div class="container">
          <div class="row clearfix justify-content-center">
          <!-- started Block -->
          <div class="started-block col-lg-4 col-md-6 col-sm-12 text-left">
              <div class="lower-content">
                <div class="started-icons">
                  <i class="fas fa-lock"></i>
                </div>
                <h2 class="h2a">Create account</h2>
                <h3>
                  <div class="text">
                    Sign-up online fo free with you email and get verified.
                  </div>
                </h3>
              </div>
          </div>

          <!-- started Block -->
          <div class="started-block col-lg-4 col-md-6 col-sm-12 text-left">
              <div class="lower-content">
                <div class="started-icons">
                  <i class="fas fa-question-circle"></i>
                </div>
                <h2 class="h2a">Answer questions</h2>
                <h3>
                  <div class="text">
                    Start answering questions through
                    your dasboard which is time based.
                  </div>
                </h3>
              </div>
          </div>

          <!-- started Block -->
          <div class="started-block col-lg-4 col-md-6 col-sm-12 text-left">
              <div class="lower-content">
                <div class="started-icons">
                  <i class="fas fa-money-bill"></i>
                </div>
                <h2 class="h2a">Start earning</h2>
                <h3>
                  <div class="text">
                    More of the questions you answer correctly,
                    more money you earn.
                  </div>
                </h3>
              </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <!-- End started Section -->

    <section id="how-it-works" class="works-section">
      <div class="auto-container">
        <!-- Sec Title -->
        <div class="sec-title-two centered">
          <h2 class="beneficieries">How it works</h2>
          <p class="beneficieries">Somethings you need to know to get started.</p>
        </div>

        <div class="row">
          <div class="col-12 col-sm-12 col-lg-12">
            <div class="row justify-content-between">
              <div class="col-12 col-sm-4 col-lg-5 how-it-works-cols">
                <div class="row">
                  <div class="col-12 col-sm-12 col-lg-12 works-text-content">
                    <span class="round">
                      <img src="/img/check-circle-regular.svg" alt="" />
                    </span>
                    <div class="text-content">
                      <h4>Time based questions</h4>
                      <p>
                        Everey question is time based which means that you have to answer the question povided
                        before your time runs out, if not it will be considered as a failed question.
                      </p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-12 col-lg-12 works-text-content">
                    <span class="round">
                      <img src="/img/check-circle-regular.svg" alt="" />
                    </span>
                    <div class="text-content">
                      <h4>Jolet Points</h4>
                      <p>
                        Every question answered correctly amount to Jolet points which determines the amount
                        you earn. So, the more your Jolet points, the more you earn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-8 col-lg-7 works-image text-center">
                <img src="@/assets/img/intro.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End works Section -->
    <section class="call-to-action-section">
      <div class="auto-container">
        <h2>Contact Us</h2>
        <div class="text">
          <p class="text2">We're here to help with any question.</p>
          <p class="text2">
            Phone: 0908 234 0000 <br />Email: hello@joletquiz.com
          </p>
        </div>
      </div>
    </section>
    <!-- End Call To Action Section -->

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  methods: {
    mobile: (($) => {
      'use strict'

      // Mobile Nav Hide Show
      if ($('.mobile-menu').length) {
        $('.mobile-menu .menu-box').mCustomScrollbar()

        var mobileMenuContent = $(
          '.main-header .nav-outer .main-menu .navigation'
        ).html()
        $('.mobile-menu .navigation').append(mobileMenuContent)
        $('.sticky-header .navigation').append(mobileMenuContent)
        $('.mobile-menu .close-btn').on('click', function () {
          $('body').removeClass('mobile-menu-visible')
        })
        // Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
          $(this).toggleClass('open')
          $(this).prev('ul').slideToggle(500)
        })
        // Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible')
        })
        $(document).keydown(function (e) {
          if (e.keyCode === 27) {
            $('body').removeClass('mobile-menu-visible')
          }
        })
        // Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on(
          'click',
          function () {
            $('body').removeClass('mobile-menu-visible')
          }
        )
      }
    })(window.jQuery)
  }
}
</script>

<style scoped>
.started-icons {
  color: #fff;
}
.h2a{
  color: #fff;
}
h2{
    color: #fff !important;
}
h1{
  color: #000 !important;
}
.beneficieries{
  color: #000 !important;
  margin-bottom: 0px !important;
  font-weight: 500 !important;
}

.how-it-works-cols{
    position: relative;
    top: 77px;
}

.sec-title-header h2{
    color: #000 !important;
}
</style>
