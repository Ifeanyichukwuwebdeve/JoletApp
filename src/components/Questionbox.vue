<template>
  <div>
    <b-jumbotron header="" lead="Bootstrap v4 Components for Vue.js 2">
      <template v-slot:lead>{{currentQuestion.question}}</template>

      <hr class="my-4" />
      <b-list-group v-for="answer in answers" :key="answer">
        <b-list-group-item>{{answer}}</b-list-group-item>
      </b-list-group>

      <b-button variant="primary" href="#">Submit</b-button>
      <b-button @click="next" variant="success" href="#">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'QuestionsBox',
  props: {
    currentQuestion: Object,
    next: Function
  },
  computed: {
    answers () {
      const answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    }
  }
}
</script>

<style>
</style>
