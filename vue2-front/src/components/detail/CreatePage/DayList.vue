<template>
  <div>
    <div class="date">

    </div>
    <div class="thr_main_sub" v-for="(day, i) in daylist" :key="i">

      <div>
        <div>{{ day.tourId }}</div>
        <div>{{ day.tourId }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DayList",
  props: {
    daylist: Array,
    index: Number
  }
}
</script>

<style scoped>
.div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.date {
  display: flex;
}

.thr_main_sub {
  display: flex;
  /*width: 100%;*/
}

</style>