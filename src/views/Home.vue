<template>
  <div class="home">
    <Navbar />
    <section class="bg-hero">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-12">
            <div class="row bg-content">
              <div class="col-12 col-sm-6 col-lg-6 order-4 order-sm-4">
                <div class="content-box">
                  <h1>Online Quiz Platform</h1>
                  <div class="text">
                    <p>
                      Jolet Quiz is an online quiz platform where
                      users earn money through answeing the questions
                      provided correctly.
                    </p>
                    <div v-if="!user.token" class="btns-box">
                      <router-link to="/signup" class="theme-btn btn-style-one"><span class="txt">Get Started</span></router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-6 order-2 order-sm-6">
                <div class="image-column">
                  <div class="image">
                    <img src="/img/home-intro.png" alt="Image" />
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
      <div class="container">
        <!-- Sec Title -->
        <div class="sec-title-header pb-2">
          <h2>Get Started. It's easy & fast.</h2>
        </div>

          <div class="row clearfix justify-content-center">
          <!-- started Block -->
          <div class="started-block col-lg-4 col-md-6 col-sm-12 text-left">
              <div class="lower-content">
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
    </section>
    <!-- End started Section -->

    <section class="about">
      <div class="row">
        <div class="col-12 col-md-7 text-center about-text-content">
          <div class="about-container">
            <p class="about-little-head">About</p>
            <h2 class="about-big-head">Welcome</h2>
            <p class="about-texts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis nulla consequuntur sapiente vero, quibusdam asperiores, in eaque aperiam sed error fuga voluptas! Doloribus exercitationem laudantium quam voluptatem sunt debitis.</p>
          </div>
        </div>
        <div class="col-12 col-md-5 about-image">
          <div class="images">
            <img src="img/hero.jpg" alt="">
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="works-section">
      <div class="container">
        <!-- Sec Title -->
        <div class="sec-title-two centered">
          <h2 class="beneficieries">How it works</h2>
          <p class="beneficieries">Somethings you need to know to get started.</p>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-12 works-text-content mb-5">
            <div class="row mt-5 mb-5">
                <div class="col-12 col-md-6 works-image text-center">
                  <div class="images-how">
                    <img src="img/activation.png" alt="">
                  </div>
                </div>
                <div class="col-12 col-md-6">
                <div class="works-texts text-content">
                <h4>Activation charge</h4>
                <p>
                  There is an activation charge of Two hundred naira (N200) that gives you access to questions to earn.
                  The charge activates 20 questions.
                </p>
                </div>
                </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-lg-12 works-text-content mb-5">
            <div class="row mt-5 mb-5">
                <div class="col-12 col-md-6">
                <div class="works-texts text-content">
                <h4>Time based questions</h4>
                <p>
                  Every question is time based which means that you have to answer the question povided
                  before your time runs out, if not it will be considered as a failed question.
                </p>
                </div>
                </div>
                <div class="col-12 col-md-6 works-image text-center">
                  <div class="images-how">
                    <img src="img/timer.png" alt="">
                  </div>
                </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-lg-12 works-text-content">
            <div class="row mt-5 mb-5">
                <div class="col-12 col-md-6 works-image text-center">
                  <div class="images-how">
                    <img src="img/coin.png" alt="">
                  </div>
                </div>
                <div class="col-12 col-md-6">
                <div class="works-texts text-content">
                <h4>Jolet Coins</h4>
                <p>
                  Every question answered correctly amount to Jolet Coins which determines the amount
                  you earn. So, the more your Jolet Coins, the more you earn.
                </p>
                </div>
                </div>
            </div>
          </div>
          </div>
        </div>
    </section>
    <!-- End works Section -->
    <section class="call-to-action-section">
      <div class="container">
        <h2>Contact Us</h2>
        <div class="text">
          <p class="text2">For feedbacks and complaints, use the email below.</p>
          <p class="text2">Email: hello@joletquiz.com
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
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapState('auth', ['user'])
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
    color: #fff;
}
.bg-content{
  margin-top: 56px;
}
.about-text-content{
  padding: 0px;
}
.about-container{
  background-color: #081c7d;
  padding: 90px 90px 60px;
  color: #fff;
}
.about-container p{
  color: #fff;
}
.images img{
  height: 374px;
}
h1{
  color: #000 !important;
}

.images-how{
    width: 306px;
    margin-left: 100px;
}
.works-texts{
   margin-top: 77px;
  margin-right: 129px;
}

.works-texts p{
  font-weight: 400;
  font-size: 16px;
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
.works-text-content{
  background-color: #fff;
  border-radius: 20px;
}

.sec-title-header h2{
    color: #000 !important;
}
.sec-title-two{
  margin-bottom: 60px;
}

@media screen and (min-width: 302px) and (max-width:1000px){
  .content-box{
    padding-top: 40px;
    padding-bottom: 20px;
  }
  .works-texts{
    margin-top: 0px;
  }
}
</style>
