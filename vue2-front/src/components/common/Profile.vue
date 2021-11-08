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
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                  color="brown"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  depressed
                  rounded
                  text
              >
                <router-link style="text-decoration: none; color: inherit;"
                              to="/mypagelist"><span id="mypage-text">마이페이지</span></router-link>
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
      initials: '임',
      fullName: '임재혁',
      email: 'guest@gmail.com',
    },
  }),

  methods: {
    logout() {
      localStorage.removeItem('Authorization');
      alert('로그아웃 성공!');
      this.$router.push('/')
      location.reload();
    },
  },
}

</script>

<style>
 .v-application--wrap {
   min-height: 0vh !important;
 }

#mypage-text, #logout-text{
  font-size: medium;
  font-weight: normal;
}
</style>