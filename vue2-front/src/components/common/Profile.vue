<template>
  <v-container>
    <v-row justify="center">
      <v-menu
          bottom
          min-width="200px"
          rounded
          offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
              icon
              x-large
              v-on="on"
          >
            <v-avatar
                color="brown"
                size="48"
            >
              <span class="white--text text-h6">{{ initial }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                  color="brown"
              >
                <span class="white--text text-h6">{{ initial }}</span>
              </v-avatar>
              <h3>{{ username }}</h3>
              <p class="text-caption mt-1">
                {{ email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  depressed
                  rounded
                  text
              >
                <router-link style="text-decoration: none; color: inherit;"
                              to="/mypagelist" v-if="auth=='ROLE_USER'"><span id="mypage-text">마이페이지</span></router-link>

                <router-link style="text-decoration: none; color: inherit;"
                             to="/adminpage" v-if="auth=='ROLE_ADMIN'"><span id="admin-text" @click="adminCheck()">관리페이지</span></router-link>
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  depressed
                  rounded
                  text
                  @click.p.prevent="logout"
              >
                <span id="logout-text">로그아웃</span>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'profile',
  data: () => ({
    user: {
      userData: [],
      admin_check: '',
    },
  }),
  methods: {
    adminCheck() {
      console.log(this.admin_check);
      this.admin_check = true;
    },

    // 로그아웃
    logout() {
      localStorage.clear();
      alert('로그아웃되었습니다.');
      this.$router.push('/')
      location.reload();
    },
  },
  props:{
    email: String,
    username: String,
    initial: String,
    auth: String, // guest : ROLE_USER, admin : ROLE_ADMIN
  }
}
</script>

<style>
/*header margin 조정*/
.v-application--wrap {
   min-height: 0vh !important;
}
#mypage-text, #logout-text, #admin-text{
  font-size: medium;
  font-weight: normal;
}
</style>