<template>
  <div>
    <div class="outer-container">
      <div class="inner-container">
        <div class="inner1">이름</div>
        <div class="inner1">닉네임</div>
        <div class="inner1">아이디</div>
        <div class="inner1">권한</div>
      </div>
      <div class="inner-container2">
        <div class="inner"><p>{{this.item.name}}</p></div>
        <div class="inner"><p>{{this.item.nickName}}</p></div>
        <div class="inner"><p>{{this.item.email}}</p></div>
        <div class="inner"><p>{{this.item.auth}}</p></div>
      </div>
      <div class="inner-container3">
        <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../AdminPage.css"

export default {
  name: "usermanageItem",
  props:{
    item:Object
  },
  methods:{
    removeItem(){
      axios.delete(`http://kosa3.iptime.org:50201/user/deleteUser/${this.item.userID}`).then(res => {
        if (res.status == 200) {
          alert("User 삭제."+this.item.userID);
          location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
</style>