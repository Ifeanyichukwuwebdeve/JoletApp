<template>
  <div>
    <!-- Left Sidebar -->
    <SideNav />
    <!-- Main Content -->
    <Main />
  </div>
</template>

<script>
import SideNav from '../components/dashboard/SideNav'
import Main from '../components/dashboard/Main'
export default {
  name: 'Dashboard',
  components: {
    SideNav,
    Main
  }
}
</script>

<style>
</style>
