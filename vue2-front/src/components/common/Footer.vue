<template>
  <div id="footer-design">
    <footer class="bg-dark" id="tempaltemo_footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pt-5">
            <h2 class="h2 text-success border-bottom pb-3 border-light logo">TAZAN</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li>
                <i class="fas fa-map-marker-alt fa-fw"></i>
                <br> <br>
                김제민<br>
                박수오<br>
                윤현조<br>
                임재혁
              </li>
            </ul>
          </div>
          <div class="col-md-4 pt-5">
            <h2 class="h2 text-light border-bottom pb-3 border-light">사이트맵</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <br><br>
              <li><a class="text-decoration-none" href="#">여행계획</a></li>
              <li><a class="text-decoration-none" href="#">여행지</a></li>
              <li><a class="text-decoration-none" href="#">여행후기</a></li>
            </ul>
          </div>
          <div class="col-md-4 pt-5">
            <h2 class="h2 text-light border-bottom pb-3 border-light">정보</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li><a class="text-decoration-none" href="#">Home</a></li>
              <hr>
              회사 주소
              <hr>
              <i class="fas fa-map-marker-alt"></i>
              서울특별시 강남구 테헤란로10길 15
              <hr>
            </ul>
          </div>

        </div>
        <div class="row text-light mb-4">
          <div class="col-12 mb-3">
            <div class="w-100 my-3 border-top border-light"></div>
          </div>
          <div class="w-100 bg-black py-3">
            <div class="container">
              <div class="row pt-2">
                <div id="footer-copyright" class="col-12">
                  <a href="https://github.com/Tazan-kosa/Tazan_Front"><img src="../../assets/GitHub-Mark-Footer.png"
                                                                           height="64" width="64"/></a>
                  <p class="text-left text-light">
                    Copyright &copy; 2021 TAZAN
                    | Designed by <a rel="sponsored" href="#" target="_blank">TAZAN</a>
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