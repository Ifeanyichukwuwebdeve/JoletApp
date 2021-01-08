<template>
  <div :style="image">
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
            <h2 class="text-center">Make Payment</h2>
            <p class="text-center">Each payment activates 20 questions</p>
            <div class="login-line"></div>
            <form @submit.prevent="onSubmit" class="container">
              <div class="form-group">
                <label for="">Email</label>
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  class="form-control"
                  placeholder="email"
                  aria-describedby="helpId"
                  required
                />
              </div>

              <div class="form-group">
                <label for="">Phone</label>
                <input
                  type="number"
                  name="Phone"
                  v-model="phone"
                  class="form-control"
                  placeholder="phone"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <paystack
                class="btn-submit"
                :amount="amount * 100"
                :email="email"
                :paystackkey="PUBLIC_KEY"
                :reference="reference"
                :callback="processPayment"
                :close="close"
              >
                Make Payment
            </paystack>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
</template>

<script>
// import router from '@/router/index.js'
// import axios from 'axios'
import paystack from 'vue-paystack'
export default {
  name: 'payments',
  components: {
    paystack
  },
  data: function () {
    return {
      errors: [],
      PUBLIC_KEY: 'pk_live_d25982b73f84b5984849af4e515230a8d368b1d6',
      email: null,
      references: null,
      phone: null,
      amount: 200,
      image: { backgroundImage: 'url(img/bg_forall.svg)' }
    }
  },
  computed: {
    reference () {
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 10; i++) {
        this.reference += possible.charAt(Math.floor(Math.random() * possible.length))
        return this.references
      }
      return this.references
    }
  },
  methods: {
    processPayment: () => {
      window.alert('Payment recieved')
      console.log(this.reference)
    },
    close: () => {
      console.log('You closed checkout page')
    }
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
h2{
  margin-bottom: 0px;
}

.login_container{
  height: 100vh;
}
</style>
