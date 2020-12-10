<template>
  <div>
   <b-button variant="dark" @click="back">back</b-button>
    <div class="container user-info">
      <h1>User Info</h1>
      <p class="title">User id: {{this.$route.params.id}} </p>
      <p class="title">User Fullname: {{`${singleUser.user.firstName} ${singleUser.user.lastName}`}} </p>
      <p class="title">User Email: {{singleUser.user.email}} </p>
      <p class="title">User Phone: {{singleUser.user.phone}} </p>
      <p class="title">User Country: {{singleUser.user.country}} </p>
      <p class="title">User Game id: {{singleUser.user.userGame}}</p>
    </div>
    <div class="container">
      <h1>User game Info</h1>
      <p class="title">Game User id: {{singleUser.userGame.createdBy}} </p>
      <p class="title">Game id: {{singleUser.userGame._id}} </p>
      <p class="title">Game Level: {{singleUser.userGame.level}} </p>
      <p class="title">Game Jolet Coins: {{singleUser.userGame.joletCoin}} </p>
      <p class="title">Game Answered questions: {{singleUser.userGame.answeredQuestions}} </p>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapState, mapActions } from 'vuex'
export default {
  // beforeRouteEnter (to, from, next) {
  //   console.log(to, from, next)
  // },
  name: 'userInfo',
  data () {
    return {
      search: null,
      searchResult: null
    }
  },
  computed: {
    ...mapState('admin', ['singleUser'])
  },
  methods: {
    ...mapActions('admin', ['getSingleUser']),
    back () {
      router.back()
    },
    getUser () {
      this.getSingleUser(this.$route.params.id)
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style scoped>
.user-info{
  margin-top: 90px;
}
h1{
  color: #000;
}
 h3 {
  color: #000;
  margin-bottom: 0px;
  padding-left: 70px;
  padding-right: 70px;
}
</style>
