<template>
  <div>
    <!-- Left Sidebar -->
    <div class="row">
      <div class="col-12">
        <SideNav />
    <!-- Main Content -->
      </div>
      <div class="col-12">
        <TopNav />
      </div>
      <div class="col-12">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '../components/dashboard/SideNav'
import Main from '../components/dashboard/Main'
import TopNav from '../components/dashboard/RightNav'
export default {
  name: 'Dashboard',
  components: {
    SideNav,
    TopNav,
    Main
  }
}
</script>

<style>
</style>
