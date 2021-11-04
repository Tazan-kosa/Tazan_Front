<template>
  <v-card
      class="mx-auto"
      max-width="500"
  >
<!--    <v-container fluid>-->
      <v-row dense>
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
        >
          <v-card>
            <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
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
        </v-col>
      </v-row>
<!--    </v-container>-->
  </v-card>
</template>

<script>
export default {
  name: "RecomPlaceSave",
  data: () => ({
    cards: [
      { title: '불국사', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
    ]
  })
}
</script>

<style scoped>

</style>