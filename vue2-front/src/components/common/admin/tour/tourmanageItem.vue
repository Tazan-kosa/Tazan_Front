<template>
  <pre>
    <p>제목: {{ this.item.title }}</p><p>주소: {{this.item.address}}</p><p>기간: {{this.item.startDate.slice(0,10)}} ~ {{this.item.endDate.slice(0,10)}}</p><p>태그: {{this.item.tag1}}, {{this.item.tag2}}</p>
      <button id="modify_btn" type="button" class="btn btn-success" @click="tourupdate">수정</button>
      <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
  </pre>
</template>

<script>
import axios from "axios";

export default {
  name: "tourmanageItem",
  props: {
    item: Object
  },
  methods: {
    removeItem() {
      axios.delete(`http://kosa3.iptime.org:50201/tour/deleteTour/${this.item.tourId}`).then(res => {
        if (res.status == 200) {
          alert("tour 삭제.");
          location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
    },
    tourupdate() {
      this.$router.push(`/adminpage/tourForm/${this.item.tourId}`);

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

pre {
  background-color: grey;
}
#modify_btn{
  margin-top: 23px;
  margin-left: 5px;
}
</style>