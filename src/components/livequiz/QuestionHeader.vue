<template>
  <div>
    <b-nav tabs>
      <b-nav-item class="title-head" disabled>Jolet Quiz</b-nav-item>
      <b-nav-item class="title-counter" disabled>Counter {{ index }}/{{ questions }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'QuestionHeader',
  props: [
    'numCorrect',
    'numTotal',
    'index',
    'questions'
  ]
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
