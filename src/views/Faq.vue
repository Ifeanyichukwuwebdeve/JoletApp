<template>
  <div class="faq">
    <Navbar />
    <section class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-12">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-6">
                <div class="auto-container">
                  <h2>Frequently Asked Questions</h2>
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
    <section class="faq-section">
      <div class="container">
        <div class="accordion" id="accordion">
          <div class="accordion-item">
            <div class="accordion-header" id="headingOne">
              <button
                class="accordion-title"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How do I earn?
              </button>
            </div>

            <div
              id="collapseOne"
              class="collapse accordion-content"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="accordion-content">
                Every question answered correctly amount Jolet point(s).
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header" id="headingTwo">
              <button
                class="accordion-title collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What is the money equivalent to Jolet point(s)?
              </button>
            </div>
            <div
              id="collapseTwo"
              class="collapse accordion-content"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="accordion-content">
                Each Jolet pont is N10 (Ten Naira).
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header" id="headingThree">
              <button
                class="accordion-title collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is there any deduction from my earned points when I fail any question?
              </button>
            </div>
            <div
              id="collapseThree"
              class="collapse accordion-content"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="accordion-content">
                No deduction of points from failed question(s).
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header" id="headingThree">
              <button
                class="accordion-title collapsed"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                What is the minimum amount I can Withdraw from my earned points?
              </button>
            </div>
            <div
              id="collapseFour"
              class="collapse accordion-content"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="accordion-content">
                The minimum amount one can withdraw is N3000 (Three thousand naira).
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header" id="headingThree">
              <button
                class="accordion-title collapsed"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How do I withdraw?
              </button>
            </div>
            <div
              id="collapseFour"
              class="collapse accordion-content"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="accordion-content">
                You have to make withdrawal request through your dashboard
                and the amount requested for will be paid into your bank account
                within 48 hours of your request.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header" id="headingThree">
              <button
                class="accordion-title collapsed"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Do I earn through referral?
              </button>
            </div>
            <div
              id="collapseFive"
              class="collapse accordion-content"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="accordion-content">
                No.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'faq',
  components: {
    Navbar,
    Footer
  }
}
</script>
