<template>
  <div>
    <QuestionHeader
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-8">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            @created="handleCreate"
            :increment="increment"
           />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionHeader from '../components/QuestionHeader.vue'
import QuestionBox from '../components/Questionbox.vue'
export default {
  name: 'Questions',
  components: {
    QuestionHeader,
    QuestionBox
  },
  data () {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      dismissSecs: 200,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    handleCreate () {
      this.index++
      console.log('Component was Created')
    },
    increment (isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  mounted: function () {
    fetch('https://opentdb.com/api.php?amount=50', {
      method: 'get'
    })
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        this.questions = jsonData.results
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
h1{
  color: #000;
}
</style>
