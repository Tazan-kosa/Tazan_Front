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
      </div>
      <div class="inner-container3">
        <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      this.$axios.delete(`/api/user/planDelete/${this.item.planID}`).then(res => {
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
    this.$axios.get(`/api/admin/user/getUser/${this.item.userID}`).then(res => {
      this.user = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

p {
  color: white;
}

</style>