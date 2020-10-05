<template>
  <div>
    <QuestionHeader />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" lg="12" offset="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
           />
        </b-col>
      </b-row>
    </b-container>
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
