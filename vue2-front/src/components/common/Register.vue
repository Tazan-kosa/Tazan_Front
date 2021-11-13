<template>
  <v-app id="app">
    <v-main>
      <v-container
          justify-center
          class="text-xs-center"
      >
        <v-layout row wrap class="text-xs-center">
          <v-flex>
            <v-card flat class="mx-auto" max-width="800">
              <v-row style="margin-top: 60px">
                <v-col

                >
                  <v-form
                      class="mx-auto"
                      style="width: 400px; height: 700px">

                    <!-- 이메일 -->
                    <div class="mx-3">
                      <v-icon color="black" size="30px">이메일</v-icon>
                      <div class="mx-1">
                        <v-text-field
                            placeholder="이메일"
                            v-model="email"
                            required
                            :rules="emailRules"
                        ></v-text-field>
                      </div>
                    </div>

                    <!-- 비밀번호 -->
                    <div class="mx-3">
                      <v-icon color="black" size="30px">비밀번호</v-icon>
                      <div class="mx-1">
                        <v-text-field
                            placeholder="비밀번호"
                            type="password"
                            v-model="passWord"
                            required
                            :rules="passWordRules"
                        ></v-text-field>
                      </div>
                    </div>

                    <!-- 비밀번호 확인 -->
                    <div class="mx-3">
                      <div class="mx-1">
                        <v-text-field
                            placeholder="비밀번호 확인"
                            type="password"
                            v-model="passWordCheck"
                            required
                            :rules="passWordRules"
                            @blur="passwordCheckValid"
                        ></v-text-field>
                      </div>
                    </div>

                    <!-- 닉네임 -->
                    <div class="mx-3">
                      <v-icon color="black" size="30px">닉네임</v-icon>
                      <div class="mx-1">
                        <v-text-field
                            placeholder="닉네임"
                            v-model="nickName"
                            required
                            :rules="nickNameRules"
                        >닉네임
                        </v-text-field>
                      </div>
                    </div>

                    <!-- 닉네임 -->
                    <div class="mx-3">
                      <v-icon color="black" size="30px">이름</v-icon>
                      <div class="mx-1">
                        <v-text-field
                            placeholder="이름"
                            v-model="name"
                            required
                            :rules="nameRules"
                        >이름
                        </v-text-field>
                      </div>
                    </div>

                    <!-- 핸드폰 -->
                    <div class="mx-3">
                      <v-icon color="black" size="30px">핸드폰</v-icon>
                      <div class="mx-1">
                        <v-text-field
                            placeholder="핸드폰"
                            v-model="phoneNumber"
                            required
                            :rules="phoneNumberRules"
                        >핸드폰
                        </v-text-field>
                      </div>
                    </div>

                    <!-- 가입하기 버튼 -->
                    <v-card-actions>
                      <v-btn
                          color="#2c4f91"
                          dark
                          large
                          block
                          @click="register"
                      >가입하기
                      </v-btn>
                    </v-card-actions>

                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<!-- register db
Email VARCHAR(30), 이메일 email
PassWord VARCHAR(100), 비밀번호, 비밀번호 확인 passWord
NickName VARCHAR(20), 닉네임  nickName
Name VARCHAR(45), 이름 Name
PhoneNumber VARCHAR(15), 휴대폰 phoneNumber
-->

<script>
import axios from "axios";

export default {
  name: 'Register',
  data: () => ({
    email: '',
    emailRules: [
      v => !!v || '이메일을 입력해 주세요.',
      v => /.+@.+/.test(v) || '이메일이 유효해야 합니다.',
    ],
    phoneNumber: '',
    phoneNumberRules: [
      v => !!v || '핸드폰 번호를 입력해 주세요.',
    ],
    name: '',
    nameRules: [
      v => !!v || '이름을 입력해 주세요.',
      v => (v && v.length <= 10) || '이름은 10글자 이하로 입력해야 합니다.',
    ],
    nickName: '',
    nickNameRules: [
      v => !!v || '닉네임을 입력해 주세요.',
      v => (v && v.length <= 10) || '닉네임은 10글자 이하로 입력해야 합니다.',
    ],
    passWord: '',
    passWordRules: [
      v => !!v || '비밀번호를 입력해 주세요.',
    ],
    passwordCheck: '',
    passwordCheckFlag: true,
  }),

  beforeCreate() {
    console.log("beforeCreate check login")
    if (localStorage.getItem('auth') !== null) {
      alert('이미 로그인 되었습니다.')
      this.$router.push('/')
    }
  },

  methods: {
    test() {
    },

    register() {
      let saveData = {};
      saveData.email = this.email;
      saveData.passWord = this.passWord;
      saveData.nickName = this.nickName;
      saveData.name = this.name;
      saveData.phoneNumber = this.phoneNumber;

      try {
        axios
            .post("http://kosa3.iptime.org:50201/userJoin", JSON.stringify(saveData), {
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              }
            })
            .then((res) => {
              if (res.status === 201) { // 성공코드 : 201
                console.log(res.data)
              }
            });
        this.$router.push('/')
        alert('회원가입 되었습니다!')
      } catch (error) {
        console.error(error);
      }
    },

    // passwordCheckValid() {
    //   if (this.signup.password === this.passwordCheck) {
    //     this.passwordCheckFlag = true
    //   } else {
    //     this.passwordCheckFlag = false
    //   },
  //   },
  },
};
</script>