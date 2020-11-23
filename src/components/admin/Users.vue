<template>
  <div>
    <b-container>
      <b-navbar type="light" variant="light">
        <b-nav-form>
          <h3>All({{AllUsers.length}})</h3>
          <b-form-input v-model="search" @keyup="searchRequest(search)" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form>
      </b-navbar>
    </b-container>
    <section class="container pt-5 main-container">
      <b-list-group>
        <b-list-group-item v-for="(AllUsers) in AllUsers" :key="AllUsers._id"> <router-link :to="`/admin-user-info/${AllUsers._id}`"><span class="user-name">{{AllUsers.firstName}}</span> <span>{{AllUsers.lastName}}</span> <span class="user-email">{{AllUsers.email}}</span> <span class="user-phone">{{AllUsers.phone}}</span></router-link> </b-list-group-item>
      </b-list-group>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Users',
  data () {
    return {
      search: null,
      searchResult: null
    }
  },
  computed: {
    ...mapState('admin', ['AllUsers'])
  },
  methods: {
    ...mapActions('admin', ['getAllUsers']),
    getUsers () {
      this.getAllUsers()
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>

<style scoped>
.list-group-item{
  color: #000;
}
.user-email {
  padding-left: 30px;
}
.user-phone {
  padding-left: 30px;
}
h3{
  color: #000;
  margin-bottom: 0px;
  padding-left: 70px;
  padding-right: 70px;
}
.navbar {
    border-radius: 0;
    font-family: 'Montserrat', sans-serif;
    border: none;
    position: relative;
    margin-top: 70px;
    left: 0;
    z-index: 11;
    width: 100%;
}
</style>
