<template>
  <pre>
    <p>{{ this.item.title }}</p>
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
      axios.put(`http://kosa3.iptime.org:50201/tour/updateTour/${this.item.tourId}`).then(res => {
        if (res.status == 200) {
          this.$router.push('/adminpage/tourForm');
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

pre {
  background-color: grey;
}
#modify_btn{
  margin-top: 23px;
  margin-left: 5px;
}
</style>