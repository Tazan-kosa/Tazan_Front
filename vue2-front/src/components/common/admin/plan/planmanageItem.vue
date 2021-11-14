<template>
  <pre>
    {{ this.item.planTitle }}
    {{ this.item.startDate }}
    {{ this.item.endDate }}
    <button type="button" class="btn btn-danger">삭제</button>
  </pre>
</template>

<script>
export default {
  name: "planmanageItem",
  props: {
    item: Object
  }
}
</script>

<style scoped>
div {
  border: 1px solid white;
}
button {
  position: static;
  float: right;

}
pre{
  background-color: grey;
}
</style>