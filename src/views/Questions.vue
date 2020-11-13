<template>
  <div>
    <QuestionHeader
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />
    <h1>{{ message }}</h1>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-8">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
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
      message: 'Welcome, Please Wait....'
    }
  },
  methods: {
    next () {
      this.index++
    },
    increment (isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
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
