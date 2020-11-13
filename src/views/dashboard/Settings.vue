<template>
  <div :style="image">
    <div class="col-lg-3 col-md-6 col-sm-12 play-game">
              <router-link class="btn play-btn" to="/dashboard">Back</router-link>
    </div>
    <div class="container error-div">
      <li class="alert alert-danger text-center" v-for="error in errors" :key="error">
        {{error}}
      </li>
    </div>
    <div class="container top-container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 login_container mt-5">
          <div class="login-form">
            <h2 class="text-center pt-3 pb-3">User Info</h2>
            <div class="login-line"></div>
            <form @submit.prevent="onSubmit" class="container">
              <div class="form-row pt-3">
                <div class="col-12 col-sm-6">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="firstName"
                    placeholder="First name"
                    required
                  />
                </div>

                <div class="col-12 col-sm-6">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="lastName"
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
                    v-model.trim="email"
                    placeholder="hello@gmail.com"
                    required
                  />
                </div>

                <div class="col-12 col-sm-6">
                  <label for="country">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="country"
                    placeholder="Nigeria"
                    required
                  />
                </div>
              </div>

              <div class="form-group pt-3">
                <label for="">Phone</label>
                <input
                  type="number"
                  name="Phone"
                  v-model.number="phone"
                  class="form-control"
                  placeholder="Phone"
                  aria-describedby="helpId"
                  required
                />
              </div>

              <button class="btn-submit"
              :disabled="this.firstName === this.user.firstName"
              >Save</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 login_container mt-5">
          <div class="login-form">
            <h2 class="text-center pt-3 pb-3">Update Password</h2>
            <div class="login-line"></div>
            <form @submit.prevent="onSubmit" class="container">
              <div class="form-group">
                <label for="">Old Password</label>
                <input
                  type="password"
                  name="Password"
                  v-model.trim="password"
                  class="form-control"
                  placeholder="Password"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <div class="form-group">
                <label for="">New Password</label>
                <input
                  type="password"
                  name="Password"
                  v-model.trim="newPassword"
                  class="form-control"
                  placeholder="Password"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <div class="form-group">
                <label for="">Repeat new Password</label>
                <input
                  type="password"
                  name="Password"
                  v-model.trim="repeatPassword"
                  class="form-control"
                  placeholder="Password"
                  aria-describedby="helpId"
                  required
                />
              </div>

              <button class="btn-submit">Save</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data: function () {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      country: null,
      phone: null,
      email: null,
      password: null,
      newPassword: null,
      repeatPassword: null,
      remember: null,
      image: { backgroundImage: 'url(img/bg_forall.svg)' }
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['login']),
    updateUserInfo () {
      this.errors = []
      if (!this.firstName) {
        return this.errors.push('First name is required')
      }
      if (!this.lastName) {
        return this.errors.push('Last name is required')
      }
      if (!this.country) {
        return this.errors.push('Country is required')
      }
      if (!this.phone) {
        return this.errors.push('Phone is required')
      }
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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.login(payload)
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  },
  mounted () {
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
    this.phone = this.user.phone
    this.country = this.user.country
    this.email = this.user.email
  }
}
</script>

<style scoped>
h2{
  margin-bottom: 0px;
}
/* .top-container{
  margin-top: ;
} */
.alert-danger{
  color: #fff !important;
}
div{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login_container{
  margin-top: 0px;
  margin-bottom: 0px;
}

.login_container h2 {
    font-size: 25px !important;
    color: #001fb0 !important;
    padding: 0px;
}
</style>
