<template>
  <div>
    <div class="bottom-nav fixed-bottom">
      <div class="container">
        <div class="row">
          <div class="col-4 text-center">
            <a href="#">
              <i class="fa fa-chevron-circle-down"></i>
              <p>Category</p>
            </a>
          </div>
          <div class="col-4 text-center">
            <router-link to="/user/:id">
              <i class="fa fa-wallet" aria-hidden="false"></i>
              <p>Withdraw</p>
            </router-link>
          </div>
          <div class="col-4 text-center">
            <router-link to="/user/:id">
              <i class="fa fa-cogs" aria-hidden="false"></i>
              <p>Settings</p>
            </router-link>
            <b-button v-b-modal.modal-lg variant="primary">lg modal</b-button>
            <b-modal id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal>
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
.bottom-nav {
  color: #000;

  i {
    font-size: 25px;
  }
}
</style>
