<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-7 login_container">
                <div class="contain-image text-center">
                  <img src="img/logo.png" alt="" class="text-center" />
                </div>

                <form action="" class="login-form">
                  <h2 class="text-center">Sign up to continue</h2>

                  <div class="login-line"></div>
                  <div class="container pr-5 pl-5 pt-0 pb-5">
                    <div class="form-row pt-3">
                      <div class="col-12 col-sm-6">
                        <label for="firstname">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>

                      <div class="col-12 col-sm-6">
                        <label for="lastname">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div class="form-row pt-3">
                      <div class="col-12 col-sm-6">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="hello@gmail.com"
                        />
                      </div>

                      <div class="col-12 col-sm-6">
                        <label for="country">Country</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nigeria"
                        />
                      </div>
                    </div>

                    <div class="form-row pt-3">
                      <div class="col-12 col-sm-6">
                        <label for="phone">Phone Number</label>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="+2347011591439"
                        />
                      </div>

                      <div class="col-12 col-sm-6">
                        <label for="reffered">Reffered By</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nobody"
                        />
                      </div>
                    </div>

                    <div class="form-group pt-3">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        placeholder="********"
                        aria-describedby="helpId"
                      />
                    </div>
                    <button class="btn" type="submit">Sign up</button>

                    <div class="dont-have-account text-center">
                      <p>Have an account? <a href="login.html">Log in</a></p>
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
</template>

<script>
export default {
  name: 'Signup'
}
</script>
