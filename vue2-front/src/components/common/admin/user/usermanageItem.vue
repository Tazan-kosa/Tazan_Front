<template>
  <pre>
    <p>이름: {{this.item.name}}</p><p>닉네임: {{this.item.nickName}}</p><p>이메일: {{this.item.email}}</p><p>권한: {{this.item.auth}}</p>
    <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
  </pre>
</template>

<script>
import axios from "axios";

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