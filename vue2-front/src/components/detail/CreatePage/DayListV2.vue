<template>
  <div>
<!--    -->
    <div class="thr_main_sub" v-for="(day, index2) in daylist" :key="index2">
      <v-card class="pa-30 ma-30" max-width="200">
        <v-img :src=day.img height="150px" @click="viewURL(day.url)"></v-img>
        <v-card-title>
          {{ day.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ day.tag1 + " , " + day.tag2}}
        </v-card-subtitle>
      </v-card>
    </div>
  </div>

</template>

<script>
export default {
  name: "DayListV2",
  props: {
    daylist: Array,
    index1: Number
  },
  methods: {
    tourListDelete (index2) {
      this.$emit('tourListDelete', {"index1":this.index1,"index2":index2})
    },
    viewURL(link){
      window.open(link)
    }
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