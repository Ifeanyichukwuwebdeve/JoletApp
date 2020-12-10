<template>
  <div :style="image">
    <div class="container error-div">
      <li class="alert alert-danger text-center" v-for="error in errors" :key="error">
        {{error}}
      </li>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-7 login_container">
          <div class="contain-image text-center">
            <img src="img/account-logo-wht.png" alt="" class="text-center" />
          </div>
          <div class="login-form">
            <h2 class="text-center">Sign up to continue</h2>
            <div class="login-line"></div>
            <form @submit.prevent="onSubmit" class="container">

              <div class="form-row pt-3">
                <div class="col-12 col-sm-6">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="firstName"
                    placeholder="First name"
                    required
                  />
                </div>

                <div class="col-12 col-sm-6">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="lastName"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div class="form-row pt-3">
                <div class="col-12 col-sm-6">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="hello@gmail.com"
                    required
                  />
                </div>

                <div class="col-12 col-sm-6">
                  <label for="country">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="country"
                    placeholder="Nigeria"
                    required
                  />
                </div>
              </div>

              <div class="form-row pt-3">
                <div class="col-12 col-sm-6">
                  <label for="phone">Phone Number</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="phone"
                    placeholder="+234"
                    maxlength="11"
                    required
                  />
                </div>

                <div class="col-12 col-sm-6">
                  <label for="reffered">Reffered By</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="reffered"
                    placeholder="Nobody"
                  />
                </div>
              </div>
              <div class="form-row pt-3">
                <div class="col-12 col-sm-6">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    v-model="password"
                    placeholder="********"
                    required
                  />
                </div>

                <div class="col-12 col-sm-6">
                  <label for="password">Repeat Password</label>
                  <input
                    type="password"
                    name="password"
                    id="passwordRepeat"
                    class="form-control"
                    v-model="passwordRepeat"
                    placeholder="********"
                    required
                  />
              </div>
            </div>
            <div class="form-row pt-4">
                <div class="col-12">
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" required>
                  <label class="form-check-label" for="defaultCheck1">
                    <router-link to="/terms">Agree to our Terms of use</router-link>
                  </label>
                </div>
                </div>
              </div>
              <button class="btn-submit" type="submit" >Sign up</button>

              <div class="dont-have-account text-center">
                <p>Have an account? <router-link to="/login">Log in</router-link></p>
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
  name: 'Signup',
  data: function () {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      passwordRepeat: null,
      country: 'Nigeria',
      phone: null,
      reffered: 'Nobody',
      image: { backgroundImage: 'url(img/bg_forall.svg)' }
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    onSubmit () {
      this.errors = []

      if (!this.firstName) {
        return this.errors.push('First name is required.')
      }
      if (!this.lastName) {
        return this.errors.push('Last name is required.')
      }
      if (!this.email) {
        return this.errors.push('Email is required.')
      } else if (!this.validEmail(this.email)) {
        return this.errors.push('Valid email required.')
      }
      if (!this.phone) {
        return this.errors.push('Phone is required.')
      }
      if (this.phone <= 10) {
        return this.errors.push('Phone must be 11 characters')
      }
      if (!this.country) {
        return this.errors.push('Country required.')
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
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          country: this.country,
          phone: this.phone,
          reffered: this.reffered
        }
      }

      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        country: this.country,
        phone: this.phone,
        reffered: this.reffered
      }
      // axios.post('/api/register', payload)
      //   .then((response) => {
      //     console.log('Registered in')
      //     router.push('/login')
      //   })
      //   .catch((errors) => {
      //     console.log('Cannot login')
      //     router.push('/login')
      //   })
      this.register(payload)
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
}
</style>
