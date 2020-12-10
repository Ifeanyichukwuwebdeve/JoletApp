<template>
  <div>
    <!-- Top Sidebar -->
    <div class="fixed-top nav-container">
      <div class="container">
        <div class="row">
        <div class="col-2 logo pt-1">
          <img src="/img/logo.png">
        </div>
        <div class="col-10 text-right">
          <div class="links">
            <router-link to="/" class="home">Home</router-link>
            <!-- /.dropdown -->

            <div class="d-inline mr-3 mx-3">
              <a href="#"
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
            <div class="d-inline">
              <b-dropdown id="dropdown-1" variant="primary" :text="name" class="m-md-2 drop">
                <b-dropdown-item @click="logout">Log out</b-dropdown-item>
              </b-dropdown>
              <!-- /.dropdown-menu -->
            </div>
          </div>
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
  background-color: #fff;
}
.nav-container a{
  color: #001fb0;
  font-size: 16px;
  font-weight: 600;
}

</style>
