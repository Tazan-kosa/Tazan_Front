<template>
  <div class="outer-box">
    <div class="left-box">
      <img src="../../../assets/tazan_jungle.jpeg" height="1348" width="950"/></div>

    <div class="right-box">
      <div>
        <img src="../../../assets/yacht_tazan_logo.png" height="110" width="110"/>
        <img src="../../../assets/tazan_title-rmb.png" height="98" width="470"/></div>
      <br>
      <h3>Tazan에 오신 여러분을 환영합니다.</h3><br><br>
      저희 Tazan은,<br>
      자유여행을 선호하는 20~30대를 타깃층으로 하여 <br>
      실제로 여행을 다녀온 사람들의 후기와 리뷰 그리고 <br>
      여행계획을 공유하여 여행일정을 쉽게 작성할 수 있는 웹 사이트를 만들었습니다.
      <hr>
      <h3>Tazan 팀</h3>

      <br>
      김제민, 박수오, 윤현조, 임재혁
      <br><br>

      <h3>github</h3>

      <div class="github-link">
        <a href="https://github.com/Tazan-kosa">
          <img src="../../../assets/GitHub-Mark-Footer.png" height="48" width="48"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {

  data() {
    return {}
  },

}
</script>

<style scoped>
h3 {
  color: white;
}

.outer-box {
}

.left-box {
  margin-left: -15%;
  float: left;
  width: 65%;
}

.right-box {
  padding: 15px;
  float: right;
  width: 50%;
}

.github-link {
  display: flex;
  justify-content: center;

}

</style>