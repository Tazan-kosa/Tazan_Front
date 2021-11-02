<template>
  <div class="wrapper">
    <div class="container">
      <div class="top-background-div"></div>
      <div class="top-container">
        <div class="profilePhotoContainer">
          <div class="profilePhoto-text" id="profilePhote">김</div>
        </div>

        <div class="text">김제민</div>
        <button class="btn-normal" onclick="goToMyPage()">프로필 수정</button>
      </div>
      <div>
        <div class="row">
          <div class="index-section">
            <div class="index-circle">
              <h5 style="font-family: 'Montserrat' !important">
                <b>나의 일정</b>
              </h5>
              <div>
                <h2 style="line-height: 1" id="myPlan">0</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section-divider"></div> -->
    <div class="container uk-container-large">
      <div class="uk-padding-small">
        <div class="section-title-container">
          <h3 class="section-title"><b>나의 일정</b></h3>
        </div>
        <!-- 페이징 처리중 -->

        <!-- 일정카드 박히는 부분 by 준영 -->
        <span id="resultArea"></span>
        <div id="pageSectionDiv" class="pagination-container">
          <div class="pagination-container">
            <a id="travelListP" href="#" onclick="getTravelListNextPage('p')"><i class="material-icons">chevron_left</i></a>
            <span id="pageList"><a onclick="getTravelListPage(1)" id="pageButton1" class="s-button"> 1 </a></span>
            <a id="travelListN" href="#" onclick="getTravelListNextPage('n')"><i class="material-icons">chevron_right</i></a>
          </div>
        </div>
      </div>
      <div class="info-container p-5">
        <button class="btn-normal" onclick="location.href='/' ">홈으로 가기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPage"
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}
.wrapper {
  display: flex;
  /*position: center;*/
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 100vh;
}
@media (max-width: 600px) {
  .wrapper {
    padding: 60px 30px;
  }
  .profilePhotoContainer {
    width: 80px;
    height: 80px;
  }
}
.top-background-div {
  height: 140px;
  background-color: #fff;
}
@media (max-width: 600px) {
  .top-background-div {
    height: 80px;
  }
}
.top-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/*사진*/
.profilePhotoContainer {
  border-radius: 50%;
  background-color: #000;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profilePhoto-text {
  font-size: 1.4rem;
  color: #fff;
  /*font-family: 'Montserrat';*/
}
.container .text {
  /*font-family: 'Montserrat';*/
  font-weight: 600;
  text-align: center;
  color: #000000;
}
.btn-normal {
  display: block;
  width: 140px;
  padding: 16px 24px;
  margin: 8px;
  /*border-radius: 4;*/
  border: 1px solid #e0e0e0;
  font-size: 0.9rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  background-color: #fff;
}
.index-section {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 120px; */
}
.index-circle {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  /* border: 5px solid #cee4e9; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h5 {
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  color: #333;
  text-transform: none;
  display: block;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
b {
  font-weight: bolder;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin: 0 0 20px 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-weight: 400;
  color: #333;
  text-transform: none;
  font-size: 1.7rem;
  line-height: 1;
}

/*중간*/
.container {
  /*position: center;*/
  display: block;
  max-width: 1400px;
}
@media (max-width: 600px) {
  .container {
    width: 90vw;
  }
  .top-container {
    margin-top: -60px;
  }

}
</style>