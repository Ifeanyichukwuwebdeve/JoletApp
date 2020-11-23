<template>
  <div>
    <div class="bottom-nav fixed-bottom">
      <div class="container">
        <div class="row">
          <div class="col-6 text-center mt-3">
            <router-link to="/admin-withdraw">
              <i class="fa fa-wallet" aria-hidden="false"></i>
              <p>Withdraw Requests</p>
            </router-link>
          </div>
          <div class="col-6 text-center mt-3">
            <router-link to="/settings">
              <i class="fa fa-cogs" aria-hidden="false"></i>
              <p>Settings</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
}
.bottom-nav {
  color: #000;

  i {
    font-size: 25px;
  }
}
</style>
