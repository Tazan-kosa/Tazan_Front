<template>
  <div>
    <div class="outer-container">
      <div class="inner-container">
        <div class="inner1">제목</div>
        <div class="inner1">주소</div>
        <div class="inner1">기간</div>
        <div class="inner1">태그</div>
      </div>
      <div class="inner-container2">
        <div class="inner"><p>{{ this.item.title }}</p></div>
        <div class="inner"><p>{{this.item.address}}</p></div>
        <div class="inner"><p>{{this.item.startDate.slice(0,10)}} ~ {{this.item.endDate.slice(0,10)}}</p></div>
        <div class="inner"><p>{{this.item.tag1}}, {{this.item.tag2}}</p></div>
        <span>
        &nbsp;
        <button id="modify_btn" type="button" class="btn btn-success" @click="tourupdate">수정</button>
        <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
        <p></p>
      </span>
      </div>
    </div>
  </div>
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
button {
  position: static;
  float: right;
}
#modify_btn{
  margin-left: 5px;
}
</style>