<template>
  <div class="travel-container" >
    <div class="daliy" v-for="(day, i) in items.daliy" :key="i">
      <div class="day"> 🚄 {{i + 1}} 일차</div>
      <TravelItem :item="item" v-for="(item, j) in items.daliy[i]" :key="j"/>
    </div>
  </div>
</template>

<script>
import TravelItem from "./TravelItem.vue"
export default {
    name: 'TravelList',
    props: {
        items: Object,
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
.daliy{
  display: flex;
}

.day{
  width: 200px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>