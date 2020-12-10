<template>
  <div>
    <div class="bottom-nav fixed-bottom">
      <div class="container">
        <div class="row">
          <div v-b-modal.modal-1 class="col-4 text-center mt-3">
            <a href="#">
              <i class="fa fa-chevron-circle-down"></i>
              <p>Category</p>
              <b-modal id="modal-1" title="BootstrapVue">
                <h5 class="text-dark text-center">Choose the Catagory you would like to answer from!!</h5>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  @change="updateCategories(selected)"
                ></b-form-select>
                <div class="mt-3">
                  Selected: <strong >{{ selected }}</strong>
                </div>
              </b-modal>
            </a>
          </div>
          <div class="col-4 text-center mt-3">
            <router-link to="/withdraw">
              <i class="fa fa-wallet" aria-hidden="false"></i>
              <p>Withdraw</p>
            </router-link>
          </div>
          <div class="col-4 text-center mt-3">
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
  name: 'BottomNav',
  data () {
    return {
      selected: null,
      options: [
        { value: 9, text: 'General Questions' },
        { value: 21, text: 'Sports' },
        { value: 14, text: 'Movies/Tv' },
        { value: 13, text: 'Entertainment' },
        { value: null, text: 'Mind Twisters' }
      ]
    }
  },
  methods: {
    updateCategories (selected) {
      this.$store.commit('UpdateCategory', selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  color: #000;
  background-color: #fff;
  i {
    font-size: 25px;
  }
}
</style>
