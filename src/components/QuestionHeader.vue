<template>
  <div>
    <b-nav tabs>
      <b-nav-item class="title-head" disabled>Jolet Quiz</b-nav-item>
      <b-nav-item class="title-counter" disabled>Counter {{ questions }}/{{ index }}</b-nav-item>
    </b-nav>
    <b-button variant="danger" :disabled="this.numTotal === 0" @click="back" >End game</b-button>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'QuestionHeader',
  props: [
    'numCorrect',
    'numTotal',
    'index',
    'questions'
  ],
  methods: {
    // ...mapActions(['updateAnswered']),
    // endGame () {
    //   const num = this.numCorrect
    //   const payload = {
    //     answeredQuestions: num,
    //     joletCoin: num
    //   }
    //   // console.log(payload)
    //   this.updateAnswered(payload)
    // }
    back () {
      router.back()
    }
  }
}
</script>

<style scoped>
.title-head{
    font-size: 20px !important;
    font-weight: bold;
}
.modal h5 {
  color: #000 !important;
}

.title-counter{
    font-size: 15px;
}
button{
  float: right;
  display: inline;
  position: relative;
  top: -50px;
  right: 30px;
}
</style>
