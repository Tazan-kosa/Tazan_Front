<template>
  <pre>
    <p>제목: {{this.item.reviewTitle}}</p><p>작성자: {{this.user.name}}</p><p>작성일: {{this.item.reviewDate.slice(0,10)}}</p><p>권한: {{this.user.auth}}</p>
    <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
  </pre>
</template>

<script>
import axios from "axios";

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
      axios.delete(`http://kosa3.iptime.org:50201/reviewDelete/${this.item.reviewID}`).then(res => {
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
    axios.get(`http://kosa3.iptime.org:50201/user/getUser/${this.item.userID}`).then(res => {
      this.user=res.data
    }).catch( err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
div {
  border: 1px solid white;
}
button {
  position: static;
  float: right;

}
pre{
  background-color: grey;
}
</style>