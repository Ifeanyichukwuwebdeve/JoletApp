<template>
  <div>
    <QuestionHeader
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-2">
          <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label">{{ formattedTimeLeft }}</span>
  </div>
      </div>
    </div>
  </div>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-8">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
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
import { mapState } from 'vuex'

const FULL_DASH_ARRAY = 283
const WARNING_THRESHOLD = 10
const ALERT_THRESHOLD = 5

const COLOR_CODES = {
  info: {
    color: 'green'
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD
  }
}

const TIME_LIMIT = 10

export default {
  name: 'Questions',
  components: {
    QuestionHeader,
    QuestionBox
  },
  data () {
    return {
      quizApi: null,
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      dismissSecs: 200,
      timePassed: 0,
      timerInterval: null
    }
  },
  watch: {
    timeLeft (newValue) {
      if (newValue === 0) {
        this.onTimesUp()
      }
    },
    index (newValue, oldValue) {
      this.startTimer()
    }
  },
  computed: {
    ...mapState(['category']),
    circleDasharray () {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`
    },

    formattedTimeLeft () {
      const timeLeft = this.timeLeft
      const minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60

      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      return `${minutes}:${seconds}`
    },

    timeLeft () {
      return TIME_LIMIT - this.timePassed
    },
    timeFraction () {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction)
    },

    remainingPathColor () {
      const { alert, warning, info } = COLOR_CODES

      if (this.timeLeft <= alert.threshold) {
        return alert.color
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color
      } else {
        return info.color
      }
    }
  },
  methods: {
    increment (isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    },
    onTimesUp () {
      clearInterval(this.timerInterval)
      console.log('Timer is over')
      this.index++
      this.timePassed = 0
    },
    startTimer () {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    }
  },
  mounted: function () {
    if (this.category === null) {
      this.quizApi = 'https://opentdb.com/api.php?amount=20'
      console.log(this.quizApi)
    } else if (this.category === 9) {
      this.quizApi = `https://opentdb.com/api.php?amount=${this.category}`
      console.log(this.quizApi)
    } else if (this.category === 21) {
      this.quizApi = `https://opentdb.com/api.php?amount=${this.category}`
      console.log(this.quizApi)
    } else if (this.category === 14) {
      this.quizApi = `https://opentdb.com/api.php?amount=${this.category}`
      console.log(this.quizApi)
    } else if (this.category === 13) {
      this.quizApi = `https://opentdb.com/api.php?amount=${this.category}`
      console.log(this.quizApi)
    }
    fetch(this.quizApi, {
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

    this.startTimer()
  }
}
</script>

<style lang="scss" scoped>
h1{
  color: #000;
}
.base-timer {
  position: relative;
  width: 86px;
  height: 94px;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: relative;
    top: -52px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .base-timer__label{
      color: #000;
    }
}
</style>
