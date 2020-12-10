<template>
  <div>
    <!--Menu Footer-->
    <footer class="main-footer">
      <div class="auto-container">
        <!--Footer Menu-->
        <div class="footer-bottom-menu clearfix">
          <div class="row">
            <div class="col-12 col-sm-10 col-lg-10">
              <div class="menu">
                <a href="#"><router-link to="/terms">Terms of use</router-link></a> /
                <a href="#"><router-link to="/privacy">Privacy Policy</router-link></a> / <a href="#"><router-link to="/faq">FAQ</router-link></a>
              </div>
            </div>
            <div class="col-12 col-sm-2 col-lg-2 text-right">
              <div class="footer-widget logo-widget">
                <ul class="social-icons">
                  <li class="pl-2">
                    <a href="#"><span class="fab fa-facebook-f"></span></a>
                  </li>
                  <li class="pl-2">
                    <a href="#"><span class="fab fa-twitter"></span></a>
                  </li>
                  <li class="pl-2">
                    <a href="#"><span class="fab fa-instagram"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!--Main Footer-->
    <footer class="main-footer">
      <div class="auto-container">
        <!--Footer Bottom-->
        <div class="footer-bottom clearfix">
          <div class="pull-left">
            <div class="copyright">
              2020 &copy; Jolet Quiz. Powered by Jolet Empire.
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
</style>
