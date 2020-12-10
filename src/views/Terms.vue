<template>
  <div>
    <Navbar />
    <section class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-12">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-6">
                <div class="auto-container">
                  <h2>Terms of Use</h2>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-6 bg-logo">
                <div class="bg-logo-container">
                  <!-- <img src="img/WHITE.png" alt=""> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Page Title-->
    <!-- Services Section -->

    <!-- End Services Section -->
    <!-- Story Section -->
    <section class="story-section">
      <div class="auto-container">
        <div class="row justify-content-center">
          <!-- Content Column -->
          <div class="content-column col-lg-9 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="text">
                <p>
                  PLEASE NOTE THAT YOUR USE OF AND ACCESS TO OUR SERVICES
                  (DEFINED BELOW) ARE SUBJECT TO THE FOLLOWING TERMS; IF YOU DO
                  NOT AGREE TO ALL OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS
                  THE SERVICES IN ANY MANNER.
                </p>
                <p>
                  Welcome to Jolet Quiz. Please read on to learn the rules and
                  restrictions that govern your use of our website(s), products,
                  services and applications (the “Services”). If you have any
                  questions, comments, or concerns regarding these terms or the
                  Services, please contact us at hello@joletquiz.com
                </p>
                <p>
                  These Terms of Use (the “Terms”) are a binding contract
                  between you and Jolet Quiz (“Jolet Quiz,” “we”, and “us”).
                  You must agree to and accept all of the Terms, or you don’t
                  have the right to use the Services. Your using the Services in
                  any way means that you agree to all of these Terms, and these
                  Terms will remain in effect while you use the Services. These
                  Terms include the provisions in this document, as well as
                  those in the Privacy Policy and Copyright Dispute Policy.
                </p>
                <h4>Will these Terms ever change?</h4>
                <p>
                  We are constantly trying to improve our Services, so these
                  Terms may need to change along with the Services. We reserve
                  the right to change the Terms at any time, but if we do, we
                  will bring it to your attention by updating the terms on the
                  Jolet Quiz website, by sending you an email, and/or by some
                  other means.
                </p>
                <p>
                  If you don’t agree with the new Terms, you are free to reject
                  them, however it means you will no longer be able to use the
                  Services. If you use the Services in any way after a change to
                  the Terms is effective, that means you agree to all of the
                  changes.
                </p>
                <p>
                  Except for changes by us as described here, no other amendment
                  or modification of these Terms will be effective unless in
                  writing and signed by both you and us.
                </p>
                <p>
                  <strong>What are the basics of using Jolet Quiz?</strong>
                </p>
                <p>
                  You may be required to sign up for an account, and select a
                  password and username. You agree to provide us with accurate,
                  complete, and up-to-date registration information about
                  yourself.
                </p>
                <p>
                  You will not share your account or password with anyone, and
                  you must protect the security of your account and your
                  password. You’re responsible for any activity associated with
                  your account.
                </p>
                <p>
                  <strong
                    >What if I see something on the Services that infringes my
                    copyright?</strong
                  >
                </p>
                <p>
                  You may have heard of the Digital Millennium Copyright Act
                  (the “DMCA”), as it relates to online service providers, like
                  Jolet Quiz, being asked to remove material that allegedly
                  violates someone’s copyright. We respect others’ intellectual
                  property rights, and we reserve the right to delete or disable
                  Content alleged to be infringing, and to terminate the
                  accounts of repeat alleged infringers.:
                </p>
                <p>
                  <strong>Will Jolet Quiz ever change the Services?</strong>
                </p>
                <p>
                  We’re always trying to improve our Services, so they may
                  change over time. We may suspend or discontinue any part of
                  the Services, or we may introduce new features or impose
                  limits on certain features or restrict access to parts or all
                  of the Services. We’ll try to give you notice when we make a
                  material change to the Services that would adversely affect
                  you, but this isn’t always practical. Similarly, we reserve
                  the right to remove any Content from the Services at any time,
                  for any reason (including, but not limited to, if someone
                  alleges you contributed that Content in violation of these
                  Terms), in our sole discretion, and without notice.
                </p>
                <p><strong>Does Jolet Quiz ever cost anything?</strong></p>
                <p>
                  Some of the services on Jolet Quiz are free and some are
                  paid. We will notify you before any Services you are using
                  begin carrying a fee, and if you wish to continue using such
                  Services, you must pay all applicable fees for such Services.
                </p>
                <p>
                  <strong
                    >What if I want to stop using Jolet Quiz ever?</strong
                  >
                </p>
                <p>
                  You’re free to do that at any time.
                </p>
                <p><strong>What are Jolet Quiz Terms of Sale?</strong></p>
                <p>
                  If you purchase any goods or services or license any software
                  through the site whether or not in connection with an Offer or
                  Discount, in addition to agreeing to these Terms of Use, you
                  are agreeing to the Terms of Sale, available here.
                </p>
                <p><strong>Contact information</strong></p>
                <p>
                  Questions about these Terms should be sent to us at: hello@joletquiz.com
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <!-- Image Column -->
        </div>
      </div>
    </section>
    <!-- End Story Section -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Terms',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
h4{
  color: #000 !important;
}
strong{
  color: #000 !important;
}
</style>
