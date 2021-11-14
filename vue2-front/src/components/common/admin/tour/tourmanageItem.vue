<template>
  <div>
    <p>{{this.item.title}}</p>
    <button type="button" class="btn btn-danger">삭제</button>
  </div>
</template>

<script>
export default {
  name: "tourmanageItem",
  props:{
    item:Object
  }
}
</script>

<style scoped>
div{
  border: 1px solid white;
}
</style>