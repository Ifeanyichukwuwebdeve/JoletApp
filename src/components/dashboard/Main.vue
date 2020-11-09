<template>
  <div>
    <section class="container pt-5 mt-4 main-container">
        <div class="block-header">
              <div class="container mb-5">
                <div class="row justify-content-between">
                  <h2 class="col-4">Dashboard</h2>
                  <h2 class="col-4">Level: {{ msg }}</h2>
              </div>
              </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="card widget_2">
                <div class="body">
                  <h6>Questions answered</h6>
                  <h2>{{ answeredQuestions }} <small class="info">of {{ totalQuestions }}</small></h2>
                  <small>Total Questions</small>
                  <b-progress
                  :value="value"
                  :max="max"
                  show-value class="mt-4">
                  </b-progress>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
              <div class="card widget_2">
                <div class="body">
                  <h6>Jolet cions earned</h6>
                  <h2>{{ joletCoin }} <small class="info">N{{ amout }}</small></h2>
                  <small>Total coins</small>
                  <b-progress l-green
                  :value="value"
                  :max="max"
                  show-value class="mt-4">
                  </b-progress>
                </div>
              </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 play-game">
              <router-link class="btn play-btn" to="/quiz">Play Game</router-link>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: '1',
      totalQuestions: 749,
      answeredQuestions: 50,
      joletCoin: 20,
      amout: null
    }
  },
  computed: {
    calculateProgressBars () {
      const value = this.answeredQuestions
      return value
    }
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

@media screen and (max-width: 640px){
  .main-container{
    margin-bottom: 90px !important;
  }
}
</style>
