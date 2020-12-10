<template>
  <div>
    <div class="container">
      <b-navbar type="light" variant="light">
        <b-container>
          <b-nav-form>
            <b-button variant="dark" @click="back">back</b-button>
          <h3>All({{getUnpaidRequest.length}})</h3>
          <b-form-input v-model="search" @keyup="searchRequest(search)" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form>
        </b-container>
      </b-navbar>
      <b-card v-for="(getUnpaidRequest) in getUnpaidRequest" :key="getUnpaidRequest._id" bg-variant="white" text-variant="dark" :title="getUnpaidRequest.userName">
        <p>{{getUnpaidRequest.userEmail}}</p>
        <span>{{getUnpaidRequest.bank}}</span>
        <span class="account-name">{{getUnpaidRequest.accountName}}</span>
        <span>{{getUnpaidRequest.bankAccountNum}}</span>
        <br>
        <span>Requested Amount: N{{getUnpaidRequest.amount}}</span>
        <br>
        <b-button href="#" @click="pay(getUnpaidRequest._id)" variant="primary">Paid</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import router from '@/router'
export default {
  name: 'WithdrawRequests',
  data () {
    return {
      search: null,
      searchResult: null
    }
  },
  computed: {
    ...mapState('admin', ['withdrawResquest']),
    ...mapGetters('admin', ['getUnpaidRequest'])
  },
  methods: {
    ...mapActions('admin', ['getWithdrawRequests']),
    ...mapActions('admin', ['confirmPayment']),
    getRequests () {
      this.getWithdrawRequests()
    },
    searchRequest (input) {
      const result = this.getUnpaidRequest.findIndex(request => {
        request.userName.includes(input)
      })
      this.searchResult = result
      console.log(this.searchResult)
    },
    pay (id) {
      const payload = {
        id: id,
        paid: true
      }
      this.confirmPayment(payload)
    },
    back () {
      router.back()
    }
  },
  mounted () {
    this.getRequests()
  }
}
</script>

<style scoped>
.account-name{
  padding-left: 20px;
  padding-right: 20px;
}
.card{
  margin-top: 30px;
}
 h3 {
  color: #001fb0;
  margin-bottom: 0px;
  padding-left: 70px;
  padding-right: 70px;
}
</style>
