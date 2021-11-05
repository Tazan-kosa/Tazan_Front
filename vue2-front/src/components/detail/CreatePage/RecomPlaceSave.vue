<template>
  <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="900"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
    >
      <v-slide-item
          v-for="n in 10"
          :key="n"
      >
        <v-col>
          <v-row
              v-for="card in cards"
              :key="card.title"
              :cols="card.flex"
          >
            <v-card>
              <v-img
                  :src="card.src"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  width="200px"
              >
              </v-img>

              <v-card-actions>
                <v-spacer><v-card-title v-text="card.title"></v-card-title></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>

</template>

<script>
export default {
  name: "RecomPlaceSave",
  data: () => ({
    cards: [
      {title: '불국사', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
    ]
  })
}
</script>

<style scoped>

</style>