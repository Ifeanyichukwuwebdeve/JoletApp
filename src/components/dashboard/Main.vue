<template>
  <div class="backcolor">
    <section class="container pt-5 mt-4 main-container">
        <div class="block-header">
              <div class="container mb-3 mt-5">
                <div class="row justify-content-between" type="light" variant="light">
                  <h2 class="col-4">Dashboard</h2>
                  <h2 class="col-4">Level: {{ this.userGame.level }}</h2>
              </div>
              </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="card widget_2">
                <div class="body">
                  <h6>Questions answered</h6>
                  <h2>{{ this.userGame.answeredQuestions }} <small class="info">of {{ totalQuestions }}</small></h2>
                  <small>Total Questions</small>
                  <b-progress
                  :value="this.userGame.answeredQuestions"
                  :max="totalQuestions"
                  show-value class="mt-4">
                  </b-progress>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 joletcoin-con">
              <div class="card widget_2">
                <div class="body">
                  <h6>Jolet coins earned</h6>
                  <h2>{{ this.userGame.joletCoin }} <small class="info">N{{ this.userGame.joletCoin * 10 }}</small></h2>
                  <small>Total coins</small>
                  <b-progress l-green
                  :value="this.userGame.joletCoin * 10"
                  :max="1000"
                  show-value class="mt-4">
                  </b-progress>
                </div>
              </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 play-game">
              <button v-if="user.isVerified" class="btn play-btn" v-b-modal.modal-2>Play Game</button>
              <router-link v-if="!user.isVerified" to="/verify" class="btn play-btn">Get verified</router-link>
            </div>
        </div>
    </section>
    <b-modal id="modal-2" title="">
    <router-link v-if="user.isVerified" class="btn play-btn" to="/quiz">Demo Game</router-link>
    <router-link v-if="user.isVerified" class="btn play-btn" to="/live-quiz">Live Game</router-link>
  </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      level: '1',
      value: 20,
      max: 40,
      totalQuestions: 74,
      amount: null
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState(['userGame'])
  }
}
</script>

<style >
.play-game a:hover{
  color: #fff;
}
.play-btn{
  font-size: 15px;
  background: #33519a;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.block-header{
  padding: 0px !important;
  margin: 0px !important;
}
.widget_2 h2 {
  color: #fff;
}
.body{
  background-color: #001fb0 !important;
  color: #fff;
}
.joletcoin-con .body{
  background-color: #ffcc00 !important;
  border: 1px solid #ffcc00 !important;
}
.body h6{
  color: #fff;
}
.body small{
  color: #fff;
}

.backcolor{
  background-color: #f6f9fc;
  height: 100vh;
}

@media screen and (min-width: 302px) and (max-width:1000px){
  .main-container{
    margin-bottom: 90px !important;
  }
  .backcolor{
  height: 135vh;
}
}
</style>
