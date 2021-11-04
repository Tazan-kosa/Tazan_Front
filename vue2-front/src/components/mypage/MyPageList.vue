<template>
  <div class="wrapper">
    <div class="container">
      <div class="top-background-div"></div>
      <div class="top-container">
        <div></div>
        <div class="text">김제민</div>
        <button class="btn-normal" onclick="goToMyPage()"></button>
      </div>
      <div>
        <div class="row">
          <div class="index-section">
            <div class="index-circle">
              <h5 style="font-family: 'Montserrat' !important">
                <b>나의 일정</b>
              </h5>
              <div>
                <h2 style="line-height: 1" id="myPlan">2</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container uk-container-large">
      <div class="uk-padding-samll">
        <div class="section-title-container">
          <h3 class="section-title"><b>나의 일정</b></h3>
        </div>
        <span id="resultArea"></span>
        <div id="pageSectionDiv" class="pagination-container">

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
  name: "MyPageList"
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}
/* Wrapper */
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 100vh;
}
/* container */

/* container uk-container-large */

/* uk-padding-small */

/* info-container p-5 */
.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
}
</style>