<template>
  <div id="footer-design">
    <footer class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pt-1">
            <!-- TAZAN 팀원 리스트 -->
            <h2 class="h2 text-success border-bottom pb-3 border-light logo">TAZAN</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li>
                <i class="fas fa-map-marker-alt fa-fw"></i>
                김제민 | 박수오 | 윤현조 | 임재혁
              </li>
            </ul>
          </div>

          <!-- TAZAN 사이트맵 -->
          <div class="col-md-4 pt-1">
            <h2 class="h2 text-light border-bottom pb-3 border-light">사이트맵</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <router-link to="/"><span>홈페이지</span></router-link> |
              <router-link to="/detail"><span>여행계획</span></router-link> |
              <router-link to="/tourlist"><span>여행지</span></router-link> |
              <router-link to="/reviewList"><span>여행후기</span></router-link>
            </ul>
          </div>

          <!-- 정보 -->
          <div class="col-md-4 pt-1">
            <h2 class="h2 text-light border-bottom pb-3 border-light">정보</h2>
            <ul class="list-unstyled text-light footer-link-list">
              서울특별시 강남구 테헤란로10길 15
            </ul>
          </div>

        </div>
        <div class="row text-light mb-4">

          <!-- footer copyright-->
          <div class="w-100 bg-black">
            <div id="footer-copyright">
              <p class="text-center">
                <a href="https://github.com/Tazan-kosa"><img src="../../assets/GitHub-Mark-Footer.png"
                                                                         height="32" width="32"/>
                </a> Copyright &copy; 2021 TAZAN | Designed by <a rel="sponsored" href="#" target="_blank">TAZAN</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {}
</script>

<style scoped>

div {
  margin-top: 15px;
}

#footer-copyright {
  text-align: center;
}

a {
  text-decoration: none;
}
</style>