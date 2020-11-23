<template>
  <div id="app">
        <!-- <b-button @click="showAlert" variant="info">
        Show alert with count-down timer
      </b-button> -->
      <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="variant"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      variant: 'danger',
      dismissSecs: 200,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style>
.alert{
  position: relative;
  z-index: 10000;
}
</style>
