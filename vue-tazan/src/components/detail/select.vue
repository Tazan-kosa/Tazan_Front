<template>
  <section class="mt-7 py-0">
    <!--/.bg-holder-->
    <div class="container">

      <div class="row">
        <div class="col-lg-6 py-5 py-xl-5 py-xxl-7">
          <h1 class="display-3 text-1000 fw-normal">Let’s make a tour</h1>
          <h1 class="display-3 text-primary fw-bold">Discover the beauty</h1>
          <div class="pt-5">
            <nav>
              <div class="nav nav-tabs therichpost-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                        type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                  <i class="fas fa-map-marker-alt"></i>
                </button>
              </div>

              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <form class="row g-4 mt-5">
                    <!-- 달력 -->
                    <div class="col-sm-6 col-md-6 col-xl-5">
                      <div class="input-group-icon"><input class="form-control input-box form-therichpost-control"
                                                           id="inputdateOne" type="date"/><span
                          class="nav-link-icon text-800 fs--1 input-box-icon"><i class="fas fa-calendar"></i></span>
                      </div>
                    </div>
                    <!-- 사랑 -->
                    <div class="col-sm-6 col-md-6 col-xl-5">
                      <div class="input-group-icon"><label class="form-label visually-hidden" for="inputPersonOne">Person</label><select
                          class="form-select form-therichpost-select input-box" id="inputPersonOne">
                        <option selected="selected"> 나홀로 여행</option>
                        <option> 나홀로 여행</option>
                        <option> 가족</option>
                        <option> 친구</option>
                      </select><span class="nav-link-icon text-800 fs--1 input-box-icon"><i class="fas fa-user"> </i></span>
                      </div>
                    </div>
                    <!-- 검색 -->
                    <div class="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                      <button class="btn btn-secondary" type="submit">Search Packages</button>
                    </div>
                  </form>

                </div>


              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "select"
}
</script>

<style scoped>

</style>