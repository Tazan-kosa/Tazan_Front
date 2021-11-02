<template>
<!--  <div>
    <div class="container">
      <div class="text-center text-white">
        <h1 class="">테스트 님의 여행 계획</h1>

        <p class="">국내만</p>
        <div class="">
          <CheckBox/>
          <Select/>
        </div>
      </div>
    </div>
  </div>-->
  <div>
    <h1>게시판 등록</h1>

    <div class="AddWrap">
      <form>
        <table class="tbAdd">
          <colgroup>
            <col width="15%" />
            <col width="*" />
          </colgroup>
          <tr>
            <th>제목</th>
            <td><input type="text" v-model="subject" ref="subject" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea v-model="cont" ref="cont"></textarea></td>
          </tr>
        </table>
      </form>
    </div>

    <div class="btnWrap">
      <a href="javascript:;" @click="fnList" class="btn">목록</a>
      <a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
    </div>
  </div>

</template>

<script>
// import CheckBox from "../../list/CheckBox";
// import Select from "../../list/Select";
export default {
  name: "PlaceAndDate",
  components: {
    // Select, CheckBox
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

/*header {
  background: #b49605;
  color: black;
}
button {
  margin-left: 10px;
  margin-right: 10px;
}*/
tbAdd{border-top:1px solid #888;}
.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0 10px;}
.btnAdd {background:#43b984}
.btnDelete{background:#f00;}
</style>