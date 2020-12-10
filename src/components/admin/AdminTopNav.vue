<template>
  <div>
    <!-- Top Sidebar -->
    <div class="container fixed-top nav-container">
      <div class="row justify-content-between">
        <div class="col-2 logo ">
          <img src="/img/logo.png">
        </div>
        <div class="col-10 text-right">
          <div class="links">
            <router-link to="/" class="home">Home</router-link>
            <!-- /.dropdown -->

            <div class="d-inline dropdown mr-3 mx-3">
              <a
                class="dropdown-toggle"
                id="notifications"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
                ><span></span><i class="fa fa-bell"></i
              ></a>
              <div
                class="dropdown-menu dropdown-menu-right rounded-0 pt-0"
                aria-labelledby="notifications"
              >
                <div class="list-group">
                  <div class="lg">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action flex-column align-items-start active"
                    >
                      <h5 class="mb-1">
                        Real Estate Marketing Automation: 6 Simple Systems
                      </h5>
                      <p class="mb-0">17 October 2016 | 9:32 pm</p>
                    </a>
                  </div>
                  <!-- /.lg -->
                </div>
                <!-- /.list group -->
              </div>
              <!-- /.dropdown-menu -->
            </div>
            <!-- /.dropdown -->

            <!-- /.dropdown -->

            <div class="d-inline dropdown">
              <b-dropdown id="dropdown-1" variant="primary" :text="name" class="m-md-2">
                <b-dropdown-item @click="logout">Log out</b-dropdown-item>
            </b-dropdown>

              <!-- /.dropdown-menu -->
            </div>
            <!-- /.dropdown -->
          </div>
        </div>
      </div>
    </div>
    <!-- END TOP NAVBAR -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TopNav',
  data () {
    return {
      name: null
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['logUserOut']),
    logout () {
      this.logUserOut()
    }
  },
  mounted () {
    this.name = this.user.firstName + ' ' + this.user.lastName
  }
}
</script>

<style lang="scss" scoped>
.logo img{
  padding-top: 10px;
  width: 150px;
}
.links {
  padding-top: 10px;
}
.nav-container{
  margin-top: 11px;
  background-color: #fff;
}
.nav-container .home{
  color: #001fb0 !important;
  font-size: 16px;
  font-weight: 600;
}
</style>
