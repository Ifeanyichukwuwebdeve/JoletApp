<template>
  <div>
    <section class="content">
    <div class="block-header">
          <div class="row">
            <div class="col-lg-9 col-md-6 col-sm-12">
              <h2>Dashboard</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/home"><i class="zmdi zmdi-home"></i> Jolet</a>
                </li>
              </ul>

              <h2>Level: {{ msg }}</h2>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mt-5">
              <a class="btn btn-sucess-outline" href="/quiz">Play Game</a>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="card widget_2">
                <div class="body">
                  <h6>Questions answered</h6>
                  <h2>39 <small class="info">of 100</small></h2>
                  <small>Total Questions</small>
                  <b-progress
                  :value="value"
                  :max="max"
                  show-value class="mb-3">
                  </b-progress>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
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
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: '1',
      value: 24
    }
  }
}
</script>

<style >
  section.content {
    border-radius: 0px important;
    background: #f5f5f5;
    border: 0px important;
    padding: 10px;
    position: relative;
    margin: 20px 70px 20px 260px;
    box-shadow: 0px important;
}
</style>
