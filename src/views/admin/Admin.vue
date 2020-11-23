<template>
  <div>
    <AdminTopNav />
    <div class="wp-content">
      <Users />
    </div>
    <AdminBottomNav />
  </div>
</template>

<script>
import AdminBottomNav from '@/components/admin/AdminBottomNav'
import Users from '@/components/admin/Users'
import AdminTopNav from '@/components/admin/AdminTopNav'
export default {
  name: 'Dashboard',
  components: {
    AdminBottomNav,
    AdminTopNav,
    Users
  }
}
</script>

<style scoped>

</style>
