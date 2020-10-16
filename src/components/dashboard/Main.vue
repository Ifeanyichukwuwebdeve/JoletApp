<template>
  <div>
    <section class="content">
      <div class="">
        <div class="block-header">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h2>Dashboard</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html"><i class="zmdi zmdi-home"></i> Jolet</a>
                </li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ul>

              <h2 v-bind="msg"></h2>
              <!-- <button
                class="btn btn-primary btn-icon mobile_menu"
                type="button"
              >
                <i class="zmdi zmdi-sort-amount-desc"></i>
              </button> -->
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12">
              <button
                class="btn btn-primary btn-icon float-right right_icon_toggle_btn"
                type="button"
              >
                <i class="zmdi zmdi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card widget_2">
                <div class="body">
                  <h6>Questions answered</h6>
                  <h2>39 <small class="info">of 100</small></h2>
                  <small>Total Questions</small>
                  <div class="progress">
                    <div
                      class="progress-bar l-purple"
                      role="progressbar"
                      aria-valuenow="39"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 39%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card widget_2">
                <div class="body">
                  <h6>Jolet cions earned</h6>
                  <h2>8 <small class="info">of 10</small></h2>
                  <small>Total coins</small>
                  <div class="progress">
                    <div
                      class="progress-bar l-green"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 89%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row clearfix">
            <div class="col-lg-12">
              <div class="card">
                <div class="body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>
