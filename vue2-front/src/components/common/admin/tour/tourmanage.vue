<template>
<div>
  <div class="button_2">
    <button type="button" class="btn btn-light" @click="tourupdate">추가</button>
  </div>
  <div>
    <tourmanageItem v-for="(item, i) in tourList" :key="i" :item="item"/>
  </div>
</div>
</template>

<script>
import axios from "axios";
import tourmanageItem from "./tourmanageItem";

export default {
  name: "tourmanage",
  data() {
    return {
      tourList: ''
    }
  },
  components: {
    tourmanageItem
  },
  created() {
    axios.get('http://kosa3.iptime.org:50201/tourList')
        .then(result => {
          this.tourList = result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
  },
  methods:{
    tourupdate() {
      this.$router.push(`/adminpage/tourForm/0`);
    }
  }
}
</script>

<style scoped>
.button_2 {
  display: flex;
  justify-content: space-between;
  align-items:  flex-end;
  margin-left: 95%;
  /*margin-right: 5%;*/
}

</style>