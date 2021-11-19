<template>
  <div>
    <div class="outer-container">
      <div class="inner-container">
        <div class="inner1">제목</div>
        <div class="inner1">작성자</div>
        <div class="inner1">작성날짜</div>
        <div class="inner1">권한</div>
      </div>
      <div class="inner-container2">
        <div class="inner"><p>{{this.item.reviewTitle}}</p></div>
        <div class="inner"><p>{{this.user.name}}</p></div>
        <div class="inner"><p>{{this.item.reviewDate.slice(0,10)}}</p></div>
        <div class="inner"><p>{{this.user.auth}}</p></div>
      </div>
      <div class="inner-container3">
        <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
      </div>
    </div>
  </div>

<!--  <pre>-->
<!--    <p>제목: </p>-->
<!--    <p>작성자: </p>-->
<!--    <p>작성일: </p>-->
<!--    <p>권한: </p>-->
<!--    <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>-->
<!--  </pre>-->

</template>

<script>
import "../AdminPage.css";

export default {
  name: "reviewmanageItem",
  data(){
    return{
      user:''
    }
  },
  props:{
    item:Object
  },
  methods:{
    removeItem(){
      this.$axios.delete(`/reviewDelete/${this.item.reviewID}`).then(res => {
        if (res.status == 200) {
          alert("Review삭제.");
          location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.$axios.get(`/api/admin/user/getUser/${this.item.userID}`).then(res => {
      this.user=res.data
    }).catch( err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

pre {
  background-color: grey;
  border: 2px solid deepskyblue;
}

</style>