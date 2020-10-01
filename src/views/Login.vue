<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6 login_container">
                <div class="contain-image text-center">
                  <img src="img/logo.png" alt="" class="text-center" />
                </div>

                <form action="" class="login-form">
                  <h2 class="text-center">Log in</h2>

                  <div class="login-line"></div>
                  <div class="container pr-5 pl-5 pt-0 pb-5">
                    <div class="form-group">
                      <label for="">Email</label>
                      <input
                        type="email"
                        name="email"
                        id=""
                        class="form-control"
                        placeholder="email"
                        aria-describedby="helpId"
                      />
                    </div>

                    <div class="form-group">
                      <label for="">Password</label>
                      <input
                        type="email"
                        name="Password"
                        id=""
                        class="form-control"
                        placeholder="Password"
                        aria-describedby="helpId"
                      />
                    </div>

                    <div class="container remember-forgot">
                      <div class="remember">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              name=""
                              id=""
                              value="checkedValue"
                            />
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div class="forgot"><a href="#">Forgot password?</a></div>
                    </div>

                    <button class="btn">Log in</button>

                    <div class="dont-have-account">
                      <p class="text-center">
                        Don't have an account? <a href="signup.html">Sign Up</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <h2>Login</h2>
    <form v-on:submit="login">
      <input type="text" name="email" /><br />
      <input type="password" name="password" /><br />
      <input type="submit" value="Login" />
    </form>
  </div> -->
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {
  name: 'Login',
  methods: {
    login: (e) => {
      e.preventDefault()
      const email = 'user@email.com'
      const password = 'password'
      const login = () => {
        const data = {
          email: email,
          password: password
        }
        axios
          .post('/api/login', data)
          .then((response) => {
            console.log('Logged in')
            router.push('/dashboard')
          })
          .catch((errors) => {
            console.log('Cannot log in')
          })
      }
      login()
    }
  }
}
</script>

<style scoped>
</style>
