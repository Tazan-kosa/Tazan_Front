<template>
  <div class="itembox mb-2">
    <RegionItem :region="region"/>
  </div>

</template>

<script>
import RegionItem from "../detail/DetailPlan/RegionItem";

export default {
  name: "Region",
  components: {
    RegionItem
  },
  props: {
    region: Object
  }
}
</script>
<style scoped>
.itembox{
  width: 265px;
  margin: 5px;
  padding: 0;
}
.itembox{
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;   /* 부드러운 모션을 위해 추가*/
}
.itembox:hover {
  cursor: pointer;
  background: #845EC2;
  border-radius: 10px;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
</style>