<template>
  <div id="header-full">
    <nav class="navbar navbar-expand-lg navbar-light shadow">
      <div class="container d-flex justify-content-between align-items-center">
        <a class="navbar-brand text-success logo h1 align-self-center">
          <!-- 로고 -->
          <router-link id="logo" to="/">
            <img src="../../assets/yacht_tazan_logo.png" height="100" width="100"/>
            <img src="../../assets/tazan_title-rmb.png" height="30" width="120"/>
          </router-link>

        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
             id="templatemo_main_nav">

          <!--Nav바-->
          <div class="flex-fill">
            <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li class="nav-item">
                <router-link to="/detail"><span>여행계획</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/tourlist"><span>여행지</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/reviewList"><span>여행후기</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/review"><span>TEST(Review)</span></router-link>
              </li>
            </ul>
          </div>

          <div class="navbar align-self-center d-flex">
            <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
              <div class="input-group">
                <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
                <div class="input-group-text">
                  <i class="fa fa-fw fa-search"></i>
                </div>
              </div>
            </div>
            <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
              <i class="fa fa-fw fa-search text-dark mr-2"></i>
            </a>

            <!-- 로그인 -->
            <!-- modal로 변환하기 -->
            <div id="login">
                <router-link to="/login"><a><span>로그인</span></a></router-link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Header",
// login data 처리 getelementbyid..

}
</script>

<style scoped>

.nav-content {
  position:sticky;
  top:0;
  background-color:white;
}

/*nav underline 제거*/
a{
  text-decoration: none;
}

span{
  font-size: large;
  font-weight: bolder;
  color: gray;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
}

span:hover{
  border-bottom: 3px solid royalblue;
}

/*header 배경이미지*/
/*#header-full {*/
/*  background-image:*/
/*  url("https://get.pxhere.com/photo/aircraft-blue-sky-white-clouds-high-altitude-cloud-layer-texture-air-travel-airplane-airline-wing-flight-flap-daytime-aviation-aerospace-engineering-airliner-vehicle-meteorological-phenomenon-airbus-a330-airbus-wide-body-aircraft-narrow-body-aircraft-1594909.jpg");*/
/*}*/

#login {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

#login:hover{
  background-color: darkgray;
}

/*.logo:hover{*/
/*  background-color: gray;*/
/*}*/

</style>