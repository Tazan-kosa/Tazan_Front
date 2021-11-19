<template>
  <div>
    <usermanageItem v-for="(item, i) in userList" :key="i" :item="item"/>
  </div>
</template>

<script>
import usermanageItem from "./usermanageItem";

export default {
  name: "usermanage",
  data() {
    return {
      userList: ''
    }
  },
  components: {
    usermanageItem
  },
  created() {
    this.$axios.get('/api/admin/user/userList')
        .then(result => {
          this.userList = result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
  }
}
</script>

<style scoped>

</style>