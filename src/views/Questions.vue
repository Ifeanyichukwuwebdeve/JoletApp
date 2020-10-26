<template>
  <div>
    <QuestionHeader />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-8">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
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
      index: 0
    }
  },
  methods: {
    next () {
      this.index++
    }
  },
  mounted: function () {
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
      method: 'get'
    })
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        this.questions = jsonData.results
      })
  }
}
</script>

<style>
</style>
