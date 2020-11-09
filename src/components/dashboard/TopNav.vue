<template>
  <div>
    <!-- Top Sidebar -->
    <div class="container fixed-top">
      <div class="row justify-content-between">
        <div class="col-4 logo ">
          <img src="/img/logo.png">
        </div>
        <div class="col-5 text-center">
          <div class="links">
            <a href="#" class="home"><i class="fa fa-home mr-3"></i></a>
            <!-- /.dropdown -->

            <div class="d-inline dropdown mr-3 mx-3">
              <a
                class="dropdown-toggle"
                id="notifications"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
                ><span>10</span><i class="fa fa-bell"></i
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
              <a
                class="dropdown-toggle"
                id="messages"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                <img
                  src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g"
                />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right rounded-0"
                aria-labelledby="messages"
              >
                <a class="dropdown-item" href="#">Edit my profile</a>
                <a class="dropdown-item" href="#">Log Out</a>
              </div>
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
export default {
  name: 'TopNav'
}
</script>

<style lang="scss">
.container{
  background-color: #fff;
}
.logo img{
  padding-top: 10px;
  width: 150px;
}
.links {
  padding-top: 10px;
}
</style>
