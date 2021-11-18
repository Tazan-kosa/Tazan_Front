<template>
  <div>
    <div class="outer-container">
      <div class="inner-container">
        <div class="inner1">제목</div>
        <div class="inner1">일정</div>
        <div class="inner1">작성자</div>
        <div class="inner1">권한</div>
      </div>
      <div class="inner-container2">
        <div class="inner"><p>{{ this.item.planTitle }}</p></div>
        <div class="inner"><p>{{ this.item.startDate.slice(0, 10) }} ~ {{ this.item.endDate.slice(0, 10) }}</p></div>
        <div class="inner"><p>{{ this.user.name }}</p></div>
        <div class="inner"><p>{{ this.user.auth }}</p></div>
        <span>
        &nbsp;
        <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
        <p></p>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../AdminPage.css"

export default {
  name: "planmanageItem",
  data() {
    return {
      user: ''
    }
  },
  props: {
    item: Object
  },
  methods: {
    removeItem() {
      axios.delete(`http://kosa3.iptime.org:50201/planDelete/${this.item.planID}`).then(res => {
        if (res.status == 200) {
          alert("Plan 삭제.");
          location.reload();

        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    axios.get(`http://kosa3.iptime.org:50201/user/getUser/${this.item.userID}`).then(res => {
      this.user = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
button {
  position: static;
  float: right;
}

p {
  color: white;
}

</style>