<template>
  <div>
<!--    -->
    <div class="thr_main_sub" v-for="(day, index2) in daylist" :key="index2">
      <v-card class="pa-20 ma-20" max-width="150">
        <v-img :src=day.img height="150px">
        </v-img>
        <v-card-title
            class="text-truncate display: inline-block"
        >
          <a @click="viewURL(day.url)">
          {{ day.title }}
          </a>
        </v-card-title>
        <v-card-subtitle>
          {{ day.tag1 + " , " + day.tag2}}
        </v-card-subtitle>
        <button type="button" uk-close @click="tourListDelete(index2)"></button>
<!--          <v-btn icon @click="tourListDelete(index2)">
            <v-btn class="mx-2" fab dark small color="primary">
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>-->
<!--          </v-btn>-->
      </v-card>
    </div>
  </div>

</template>

<script>
export default {
  name: "DayList",
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
div {
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.thr_main_sub {
  display: flex;
  width: 100%;
  justify-content: space-around;
}


</style>