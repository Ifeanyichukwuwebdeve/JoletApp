<template>
  <div>
    <b-jumbotron header="" lead="">
      <template v-slot:lead>{{currentQuestion.question}}</template>

      <hr class="my-4" />
      <b-list-group>
        <b-list-group-item
        v-for="(shuffledAnswer, index) in shuffledAnswers"
        :key="index"
        @click="selectAnswer(index)"
        :class="answerClass(index)"
        >
        {{shuffledAnswer}}
        </b-list-group-item>
      </b-list-group>

      <b-button
       variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex === null || this.answered"
        >Submit
        </b-button>
        <b-button
       variant="danger"
        @click="endGame"
        :disabled="numTotal === 0"
        >End game
        </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapActions } from 'vuex'
export default {
  name: 'QuestionsBox',
  props: {
    currentQuestion: Object,
    increment: Function,
    numTotal: Number,
    numCorrect: Number
  },
  data () {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: null,
      answered: false
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler () {
        this.selectedIndex = null
        this.answered = false
        this.suffleAnwsers()
      }
    }
  },
  methods: {
    ...mapActions(['updateAnswered']),
    selectAnswer (index) {
      this.selectedIndex = index
    },
    submitAnswer () {
      let isCorrect = false

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }

      this.answered = true

      this.increment(isCorrect)
    },
    suffleAnwsers () {
      const answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
    },
    answerClass (index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered && this.selectedIndex === index && this.correctIndex !== this.index) {
        answerClass = 'incorrect'
      }
      return answerClass
    },
    endGame () {
      const num = this.numCorrect
      const payload = {
        answeredQuestions: num,
        joletCoin: num
      }
      // console.log(num)
      this.updateAnswered(payload)
    }
  }
}
</script>

<style>
.list-group-item{
  color:#000;
}
.list-group-item:hover{
  background-color: #eee;
  cursor: pointer;
}

.selected{
  background-color: #6262f1 !important;
}

.correct{
  background-color: #FFF !important;
}

.incorrect{
  background-color: #fff !important;
}
</style>
