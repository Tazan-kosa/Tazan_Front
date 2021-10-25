<template>
  <div class="travel-container">
      <TravelItem :item="item" v-for="item in items" :key="item"/>
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
    display: flex;
}
</style>