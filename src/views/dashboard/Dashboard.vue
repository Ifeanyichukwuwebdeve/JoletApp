<template>
  <div>
    <TopNav />
    <div class="wp-content">
      <Main />
    </div>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '@/components/dashboard/BottomNav'
import Main from '@/components/dashboard/Main'
import TopNav from '@/components/dashboard/TopNav'
export default {
  name: 'Dashboard',
  components: {
    BottomNav,
    TopNav,
    Main
  }
}
</script>

<style scoped>

</style>
