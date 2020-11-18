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
            <h2 class="text-center">Reset Password</h2>
            <div class="login-line"></div>
            <form @submit.prevent="onSubmit" class="container">
              <div class="form-group">
                <label for="">Code</label>
                <input
                  type="number"
                  name="Code"
                  v-model.number="code"
                  class="form-control"
                  placeholder="Code"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <div class="form-group">
                <label for="">Password</label>
                <input
                  type="password"
                  name="password"
                  v-model="password"
                  class="form-control"
                  placeholder="password"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <div class="form-group">
                <label for="">Repeat password</label>
                <input
                  type="password"
                  name="password"
                  v-model="repeatPassword"
                  class="form-control"
                  placeholder="password"
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
import { mapActions } from 'vuex'
export default {
  name: 'ResetPassword',
  data: function () {
    return {
      errors: [],
      code: null,
      password: null,
      repeatPassword: null,
      image: { backgroundImage: 'url(img/bg_forall.svg)' }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    onSubmit () {
      this.errors = []
      if (!this.code) {
        return this.errors.push('Code is  required.')
      }
      if (!this.password) {
        return this.errors.push('Password is  required.')
      }
      if (this.password <= 6) {
        return this.errors.push('Password must exceed 6 characters')
      }
      if (!this.passwordRepeat.includes(this.password)) {
        return this.errors.push('Passwords must match')
      }
      if (!this.errors) {
        return {
          code: this.code,
          password: this.password
        }
      }
      const payload = {
        code: this.code,
        password: this.password
      }
      this.login(payload)
    },
    validpassword: function (password) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(password)
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
  margin-top: 24px;
  margin-bottom: 106px;
}
</style>
