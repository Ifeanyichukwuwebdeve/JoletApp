<template>
  <div class="container text-center pt-5">
    <h1>Not found</h1>
    <p>Oops we could't find the page. try going
      <a href="#" @click="back">Back</a>
    </p>
  </div>
</template>

<script>
import router from '@/router'
export default {
  methods: {
    back () {
      router.back()
    }
  }
}
</script>

<style scoped>
h1{
  color: #000;
}
</style>
