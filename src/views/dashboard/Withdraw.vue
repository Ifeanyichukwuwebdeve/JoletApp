<template>
  <div :style="image">
    <div class="col-lg-3 col-md-6 col-sm-12 play-game fixed">
              <button class="btn play-btn" @click="back">Back</button>
    </div>
    <div class="container error-div">
      <li class="alert alert-danger text-center" v-for="error in errors" :key="error">
        {{error}}
      </li>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 login_container">
          <div class="contain-image text-center">
            <img src="img/account-logo-wht.png" alt="" class="text-center" />
          </div>
          <div class="login-form">
            <h2 class="text-center">Enter bank details and withdraw amount</h2>
            <div class="login-line"></div>
            <form @submit.prevent="onSubmit" class="container">
              <div class="form-group">
                <label for="">Bank</label>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  @change="selectBank(selected)"
                ></b-form-select>
              </div>
              <div class="form-group">
                <label for="">Account Name</label>
                <input
                  type="text"
                  name="accountname"
                  v-model.trim="accountName"
                  class="form-control"
                  placeholder="Account Name"
                  aria-describedby="helpId"
                  required
                />
              </div>

              <div class="form-group">
                <label for="">Bank account number</label>
                <input
                  type="number"
                  name="Number"
                  v-model.number="bankAccountNum"
                  class="form-control"
                  placeholder="Number"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <div class="form-group">
                <label for="">Amount</label>
                <input
                  type="number"
                  name="Amount"
                  v-model.number="amount"
                  class="form-control"
                  placeholder="Amount"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <button :disabled="this.userGame.joletCoin >=! 200 || this.amount > this.userGame.joletCoin"  class="btn-submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
</template>

<script>
import router from '@/router'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Withdraw',
  data: function () {
    return {
      errors: [],
      bank: null,
      selected: null,
      options: [
        { value: 'Fidelity Bank', text: 'Fidelity Bank' },
        { value: 'First Bank', text: 'First Bank' },
        { value: 'Guaranty Trust Bank', text: 'Guaranty Trust Bank' },
        { value: 'Zenith Bank', text: 'Zenith Bank' },
        { value: 'Union Bank', text: 'Union Bank' },
        { value: 'UBA', text: 'UBA' },
        { value: 'Access Bank', text: 'Access Bank' },
        { value: null, text: 'Bank' }
      ],
      accountName: null,
      userId: null,
      userName: null,
      userEmail: null,
      bankAccountNum: null,
      amount: null,
      image: { backgroundImage: 'url(img/bg_forall.svg)' }
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState(['userGame']),
    ...mapState(['withdrawRequests'])
  },
  methods: {
    ...mapActions(['withdrawRequest']),
    back () {
      router.back()
    },
    selectBank (bank) {
      this.bank = bank
    },
    onSubmit () {
      this.errors = []

      if (!this.bank) {
        return this.errors.push('Back is required.')
      }
      if (!this.accountName) {
        return this.errors.push('Account name is required.')
      }
      if (!this.bankAccountNum) {
        return this.errors.push('Account number is required.')
      }
      if (!this.amount) {
        return this.errors.push('amount is required.')
      }
      if (!this.errors) {
        return {
          bank: this.bank,
          accountName: this.accountName,
          bankAccountNum: this.bankAccountNum,
          amount: this.amount
        }
      }
      const payload = {
        userId: this.userId,
        userName: this.userName,
        userEmail: this.userEmail,
        bank: this.bank,
        accountName: this.accountName,
        bankAccountNum: this.bankAccountNum,
        amount: this.amount
      }
      this.withdrawRequest(payload)
      // console.log(payload)
    }
  },
  mounted () {
    this.userId = this.user.id
    this.userName = this.user.firstName + ' ' + this.user.lastName
    this.userEmail = this.user.email
    this.bank = this.withdrawRequests.bank
    this.accountName = this.withdrawRequests.accountName
    this.bankAccountNum = this.withdrawRequests.bankAccountNum
  }
}
</script>

<style scoped>
.alert-danger{
  color: #fff !important;
}
div{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login_container{
  margin-top: 24px;
}
</style>
