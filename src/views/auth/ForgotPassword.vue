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
            <h2 class="text-center">Forgot password</h2>
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

              <button class="btn-submit">Send</button>

              <div class="dont-have-account">
                <p class="text-center">
                  Don't have an account?
                  <router-link to="/signup">Sign Up</router-link>
                </p>
              </div>
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
import { mapActions } from 'vuex'
export default {
  name: 'ForgotPassword',
  data: function () {
    return {
      errors: [],
      email: null,
      image: { backgroundImage: 'url(img/bg_forall.svg)' }
    }
  },
  methods: {
    ...mapActions('auth', ['forgotPassword']),
    onSubmit () {
      this.errors = []

      if (!this.email) {
        return this.errors.push('Email is required.')
      } else if (!this.validEmail(this.email)) {
        return this.errors.push('Valid email required.')
      }
      if (!this.errors) {
        return {
          email: this.email
        }
      }
      const payload = {
        email: this.email
      }
      this.forgotPassword(payload)
      // console.log(payload)
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
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

.login_container{
 margin-top: 50px;
 margin-bottom: 172px;
}
</style>
