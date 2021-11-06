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
                김제민<br>
                박수오<br>
                윤현조<br>
                임재혁
              </li>
            </ul>
          </div>

          <!-- TAZAN 사이트맵 -->
          <div class="col-md-4 pt-1">
            <h2 class="h2 text-light border-bottom pb-3 border-light">사이트맵</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li><a class="text-decoration-none" href="#">여행계획</a></li>
              <li><a class="text-decoration-none" href="#">여행지</a></li>
              <li><a class="text-decoration-none" href="#">여행후기</a></li>
            </ul>
          </div>

          <!-- 정보 -->
          <div class="col-md-4 pt-1">
            <h2 class="h2 text-light border-bottom pb-3 border-light">정보</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <a class="text-decoration-none" href="#">Home</a>
              <hr>
              서울특별시 강남구 테헤란로10길 15
            </ul>
          </div>

        </div>
        <div class="row text-light mb-4">

          <!-- footer copyright-->
          <div class="w-100 bg-black">
            <div class="container">
              <div class="row pt-2">
                <div id="footer-copyright">
                  <a href="https://github.com/Tazan-kosa/Tazan_Front"><img src="../../assets/GitHub-Mark-Footer.png"
                                                                           height="64" width="64"/></a>
                  <p class="text-center">
                    Copyright &copy; 2021 TAZAN | Designed by <a rel="sponsored" href="#" target="_blank">TAZAN</a>
                  </p>
                </div>
              </div>
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

#footer-copyright{
  text-align: center;
}
</style>