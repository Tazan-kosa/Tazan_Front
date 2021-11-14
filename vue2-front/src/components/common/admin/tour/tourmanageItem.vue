<template>
  <div>
    <p>{{this.item.title}}</p>
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