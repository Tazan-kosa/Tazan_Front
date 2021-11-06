<template>
  <v-row>
    <v-col
        cols="12"
        sm="6"
    >
      <v-date-picker
          v-model="dates"
          range
      ></v-date-picker>
    </v-col>

  </v-row>
</template>

<script>
export default {
  name: "DatePicker",
  data: () => ({
    dates: ['', ''],
  }),
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
}
</script>

<style scoped>

</style>