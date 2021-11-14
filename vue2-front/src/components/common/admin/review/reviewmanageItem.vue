<template>
  <div>
    <p>{{this.item.reviewTitle}}</p>
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