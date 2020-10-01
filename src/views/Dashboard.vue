<template>
  <div>
    <div class="navbar-right">
      <ul class="navbar-nav">
        <li class="dropdown">
          <a
            href="javascript:void(0);"
            class="dropdown-toggle"
            title="Notifications"
            data-toggle="dropdown"
            role="button"
            ><i class="zmdi zmdi-notifications"></i>
            <div class="notify">
              <span class="heartbit"></span><span class="point"></span>
            </div>
          </a>
          <ul class="dropdown-menu slideUp2">
            <li class="header">Notifications</li>
            <li class="body">
              <ul class="menu list-unstyled">
                <li>
                  <a href="javascript:void(0);">
                    <div class="icon-circle bg-grey">
                      <i class="zmdi zmdi-comment-text"></i>
                    </div>
                    <div class="menu-info">
                      <h4><b>John</b> Commented your post</h4>
                      <p><i class="zmdi zmdi-time"></i> 4 hours ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div class="icon-circle bg-purple">
                      <i class="zmdi zmdi-refresh"></i>
                    </div>
                    <div class="menu-info">
                      <h4><b>John</b> Updated status</h4>
                      <p><i class="zmdi zmdi-time"></i> 3 hours ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div class="icon-circle bg-light-blue">
                      <i class="zmdi zmdi-settings"></i>
                    </div>
                    <div class="menu-info">
                      <h4>Settings Updated</h4>
                      <p><i class="zmdi zmdi-time"></i> Yesterday</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="dropdown"></li>
        <li>
          <a href="javascript:void(0);" class="js-right-sidebar" title="Setting"
            ><i class="zmdi zmdi-settings zmdi-hc-spin"></i
          ></a>
        </li>
        <li>
          <a href="#" class="mega-menu" title="Sign Out"
            ><i class="zmdi zmdi-power"></i
          ></a>
        </li>
      </ul>
    </div>

    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
      <div class="navbar-brand">
        <button class="btn-menu ls-toggle-btn" type="button">
          <i class="zmdi zmdi-menu"></i>
        </button>
        <a href="index.html"
          ><img src="img/logo.png" width="25" alt="jolet"
        /></a>
      </div>
      <div class="menu">
        <ul class="list">
          <li>
            <div class="user-info">
              <a class="image" href="#"
                ><img src="assets/images/profile_av.jpg" alt="User"
              /></a>
              <div class="detail">
                <h4>Victory</h4>
                <small>User</small>
              </div>
            </div>
          </li>
          <li class="active open">
            <a href="index.html"
              ><i class="zmdi zmdi-home"></i><span>Dashboard</span></a
            >
          </li>
          <li>
            <a href="javascript:void(0);" class="menu-toggle"
              ><i class="zmdi zmdi-apps"></i><span>Menu</span></a
            >
            <ul class="ml-menu">
              <li><a href="#">Withdraw</a></li>
              <li><a href="#">Category</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);" class="menu-toggle"
              ><i class="zmdi zmdi-assignment"></i><span>Settings</span></a
            >
            <ul class="ml-menu">
              <li><a href="#">Edit profile</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Right Sidebar -->
    <aside id="rightsidebar" class="right-sidebar">
      <ul class="nav nav-tabs sm">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#setting"
            ><i class="zmdi zmdi-settings zmdi-hc-spin"></i
          ></a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="setting">
          <div class="slim_scroll">
            <div class="card">
              <h6>Theme Option</h6>
              <div class="light_dark">
                <div class="radio">
                  <input
                    type="radio"
                    name="radio1"
                    id="lighttheme"
                    value="light"
                    checked=""
                  />
                  <label for="lighttheme">Light Mode</label>
                </div>
                <div class="radio mb-0">
                  <input
                    type="radio"
                    name="radio1"
                    id="darktheme"
                    value="dark"
                  />
                  <label for="darktheme">Dark Mode</label>
                </div>
              </div>
            </div>
            <!--
                <div class="card">
                    <h6>Color Skins</h6>
                    <ul class="choose-skin list-unstyled">
                        <li data-theme="purple"><div class="purple"></div></li>
                        <li data-theme="blue"><div class="blue"></div></li>
                        <li data-theme="cyan"><div class="cyan"></div></li>
                        <li data-theme="green"><div class="green"></div></li>
                        <li data-theme="orange"><div class="orange"></div></li>
                        <li data-theme="blush" class="active"><div class="blush"></div></li>
                    </ul>
                </div>
-->
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->

    <section class="content">
      <div class="">
        <div class="block-header">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h2>Dashboard</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html"><i class="zmdi zmdi-home"></i> Jolet</a>
                </li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ul>

              <h2 v-bind="msg"></h2>
              <!-- <button
                class="btn btn-primary btn-icon mobile_menu"
                type="button"
              >
                <i class="zmdi zmdi-sort-amount-desc"></i>
              </button> -->
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12">
              <button
                class="btn btn-primary btn-icon float-right right_icon_toggle_btn"
                type="button"
              >
                <i class="zmdi zmdi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card widget_2">
                <div class="body">
                  <h6>Questions answered</h6>
                  <h2>39 <small class="info">of 100</small></h2>
                  <small>Total Questions</small>
                  <div class="progress">
                    <div
                      class="progress-bar l-purple"
                      role="progressbar"
                      aria-valuenow="39"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 39%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card widget_2">
                <div class="body">
                  <h6>Jolet cions earned</h6>
                  <h2>8 <small class="info">of 10</small></h2>
                  <small>Total coins</small>
                  <div class="progress">
                    <div
                      class="progress-bar l-green"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 89%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col-lg-12">
              <div class="card">
                <div class="body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
