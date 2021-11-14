<template>
  <div>
    <p>{{this.item.reviewTitle}}</p>
    <button type="button" class="btn btn-danger">삭제</button>
  </div>
</template>

<script>
export default {
  name: "reviewmanageItem",
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