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
                <a href="#">About Us</a> ·
                <a href="#"><router-link to="/privacy">Privacy Policy</router-link></a> ·
                <a href="#"><router-link to="/terms">Terms</router-link></a> · <a href="#"><router-link to="/faq">FAQ</router-link></a>
              </div>
            </div>
            <div class="col-12 col-sm-2 col-lg-2">
              <div class="footer-widget logo-widget">
                <ul class="social-icons">
                  <li>
                    <a href="#"><span class="fab fa-facebook-f"></span></a>
                  </li>
                  <li>
                    <a href="#"><span class="fab fa-twitter"></span></a>
                  </li>
                  <li>
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
              &copy; 2020 Jolet Empire. All Rights Reserved.
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
