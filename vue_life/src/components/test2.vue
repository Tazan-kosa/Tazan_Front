<template>
  <div>
    <h1>Vue.js 라이프사이클 샘플 예제</h1>
    <h2>개발자 console 확인</h2>
    <button @click="toggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <hr/>
    <div v-if="isShowing">
      <app-child></app-child>
    </div>

    <div id="childarea" style="display:none">
      <h4>Compoenent Create!</h4>
    </div>
  </div>
</template>

<script>
import Child from "./plus/Child";

export default {
  name: "test2",
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    appChild: Child
  },
  beforeCreate() {
    console.log("beforeCreate!!")
  },
  created() {
    console.log("created!!")
  },
  beforeMount() {
    console.log("beforeMount!!")
  },
  mounted() {
    console.log("mounted!!")
  },
  beforeDestroy() {
    console.log("beforeDestroy!!")
  },
  destroyed() {
    console.log("destroyed!!")
  }
}
</script>

<style scoped>

</style>