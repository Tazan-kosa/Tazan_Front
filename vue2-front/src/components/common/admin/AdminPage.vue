<template>
  <v-card dark>
    <v-app dark>
      <v-navigation-drawer
          app
          dark
          permanent
      >
        <!-- 타잔 로고-->
        <v-col @click="movetopage(path)">
          <v-img
              class="align-self-stretch"
              src="../../../assets/tazan_title-rmb.png"
          ></v-img>
        </v-col>
        <!-- 메뉴바-->
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
              <v-list-item-title class="item-content" @click="movetopage(item.path, item.title)">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-app-bar
          dark
          app
      >
        <!-- 현재페이지-->
        <v-col>
          {{ this.nowpage }}
        </v-col>

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
          min-height="100%"
          dark>
        <!-- main -->
        <v-main
            min-height="100%"
        >
          <!-- container -->
          <v-container
              fluid
          >
            <!-- admin page입니다.-->
            <!-- vue-router -->
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-card>

      <v-footer app dark>
        <div class="grey--text">TAZAN 관리자 페이지</div>
      </v-footer>
    </v-app>
  </v-card>
</template>

<script>
export default {
  name: "AdminPage",

  data() {
    return {
      items: [
        {title: '여행지관리', icon: 'mdi-view-dashboard', path: 'tour'},
        {title: '계획관리', icon: 'mdi-image', path: 'plan'},
        {title: '후기관리', icon: 'mdi-pencil', path: 'review'},
        {title: '계정관리', icon: 'mdi-account', path: 'user'},
        {title: '댓글관리', icon: 'mdi-message-reply-text', path: 'reply'},
        {title: 'About', icon: 'mdi-help-box', path: 'about'},
      ],
      path: 'tour',
      nowpage: '',

      right: null,
    }
  },

  methods: {
    logout() {
      localStorage.clear();
      alert('로그아웃되었습니다.');
      this.$router.push('/')
      location.reload();
    },
    movetopage(path, title) {
      this.$router.push(`/adminpage/${path}`, () => {
      })
      this.nowpage = title;
    }
  }
}
</script>

<style scoped>
.item-content {
  height: 20px;
  margin: 0px auto;
}
</style>