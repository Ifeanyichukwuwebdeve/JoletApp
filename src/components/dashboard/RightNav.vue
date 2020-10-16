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
  </div>
</template>

<script>
export default {
  name: 'RightNav'
}
</script>
