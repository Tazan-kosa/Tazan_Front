<template>
  <div class="travel-container">
<!--      <TravelItem :item="item" v-for="item in items" :key="item"/>-->
      <TravelItem :item="item" v-for="(item, i) in items" :key="i"/>
  </div>
</template>

<script>
import TravelItem from "./TravelItem.vue"
export default {
    name: 'TravelList',
    props: {
        items: Array,
    },
    components: {
        TravelItem
    }

}
</script>

<style>
.travel-container {
    overflow-x: scroll;
    display: flex;
}

.travel-container::-webkit-scrollbar {
  height: 5px;
}
.travel-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.travel-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.travel-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>