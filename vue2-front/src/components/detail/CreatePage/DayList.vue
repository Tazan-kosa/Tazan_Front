<template>
  <div>
    <div class="thr_main_sub" v-for="(day, i) in daylist" :key="i">
      <v-card
          class="pa-30 ma-30"
          max-width="200"
      >
        <v-img
            :src=day.img
            height="150px"
        ></v-img>

        <v-card-title>
          {{ day.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ day.tag1 + " , " + day.tag2}}
        </v-card-subtitle>


          <v-btn
              icon
              @click="day.url"
          >
            <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </v-btn>
      </v-card>


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