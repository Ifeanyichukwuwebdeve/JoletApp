<template>
  <div>
    <div class="container error-div">
      <li class="alert alert-danger text-center" v-for="error in errors" :key="error">
        {{error}}
      </li>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 login_container">
          <div class="contain-image text-center">
            <img src="img/logo.png" alt="" class="text-center" />
          </div>
          <div class="login-form">
            <h2 class="text-center">Log in</h2>
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
                <label for="">Password</label>
                <input
                  type="password"
                  name="Password"
                  v-model="password"
                  class="form-control"
                  placeholder="Password"
                  aria-describedby="helpId"
                  required
                />
              </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        v-model="remember"
                        value="checkedValue"
                      />
                      Remember Me
                    </label>
                <div class="forgot">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button class="btn-submit">Log in</button>

              <div class="dont-have-account">
                <p class="text-center">
                  Don't have an account?
                  <a href="/signup">Sign Up</a>
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
// import router from "../router"
import axios from 'axios'
export default {
  name: 'Login',
  data: function () {
    return {
      errors: [],
      email: null,
      password: null,
      remember: null
    }
  },
  methods: {
    onSubmit () {
      this.errors = []

      if (!this.email) {
        return this.errors.push('Email is required.')
      } else if (!this.validEmail(this.email)) {
        return this.errors.push('Valid email required.')
      }
      if (!this.password) {
        return this.errors.push('Password is  required.')
      }
      if (!this.errors) {
        return {
          email: this.email,
          password: this.password,
          remember: this.remember
        }
      }
      const login = {
        email: this.email,
        password: this.password
      }

      axios
        .post('/api/auth/login', login)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
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
</style>
