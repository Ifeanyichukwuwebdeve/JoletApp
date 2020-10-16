<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>
