<template>
  <div>
    <replymanageItem v-for="(item, i) in ReplyItemList" :key="i" :item="item"/>
  </div>
</template>

<script>
import axios from "axios";
import replymanageItem from "./replymanageItem";

export default {
  name: "replymanage",
  data() {
    return {
      ReplyItemList: '',
    }
  },
  components: {
    replymanageItem,
  },
  created() {
    axios.get('http://kosa3.iptime.org:50201/admin/comment/selectAll', {
          headers: {
            'Auth': localStorage.getItem('auth'),
          },
        }
    )
        .then(result => {
          this.ReplyItemList = result.data
          console.log(result.data)
          console.log(result.data.nickName)
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
          console.log("에러 in replymanage")
          // console.log(userRole)
        })
  }
}
</script>

<style scoped>

</style>