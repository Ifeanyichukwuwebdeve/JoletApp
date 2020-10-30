<template>
  <div>
    <b-nav tabs>
      <b-nav-item class="title-head" disabled>Jolet Quiz</b-nav-item>
      <b-nav-item class="title-counter" disabled>Counter {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'QuestionHeader',
  props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>

<style scoped>
.title-head{
    font-size: 20px !important;
    font-weight: bold;
}

.title-counter{
    font-size: 15px;
}
</style>
