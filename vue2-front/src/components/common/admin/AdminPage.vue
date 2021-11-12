<template>
  <v-card dark>
    <v-app dark>
      <v-navigation-drawer
          app
          dark
          permanent
      >
        <v-col>
          <v-img
              class="align-self-stretch"
              src="../../../assets/tazan_title-rmb.png"
          ></v-img>
        </v-col>

        <v-list
            dense
            nav
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              height="200"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-app-bar
          dark
          app
      >
        (현재 상태)
        <v-col sm="0" offset-sm="10">
        <v-btn
            depressed
            rounded
            text
            @click.p.prevent="logout"
        >로그아웃
        </v-btn>

        </v-col>
      </v-app-bar>

      <v-card
          min-height="100vh"
          max-height="500"
          dark>
        <!-- main -->
        <v-main
            min-height="100%"

        >
          <v-col>v-col in v-main</v-col>
          <!-- container -->
          <v-container
              fluid>
            v-container
            <!-- vue-router -->
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-card>

      <v-footer app dark>
        <v-text class="grey--text">TAZAN 관리자 페이지</v-text>
        </v-footer>
        </v-app>
        </v-card>
</template>

<script>
export default{
  name: "AdminPage",

  data() {
    return{
      items: [
        {title: '대시보드', icon: 'mdi-view-dashboard'},
        {title: '사진', icon: 'mdi-image'},
        {title: '계정관리', icon: 'mdi-account'},
        {title: 'About', icon: 'mdi-help-box'},
      ],

      right:null,
    }
  },

  methods: {
    logout() {
      localStorage.clear();
      alert('로그아웃되었습니다.');
      this.$router.push('/')
      location.reload();
    },
  }
}

</script>

<style scoped>


</style>