<template>
  <v-app id="app">
    <v-main>
      <v-container
          style="position: relative; top: 20%; margin-left: 20%"
          class="text-xs-center"
      >
        <v-layout row wrap class="text-xs-center">
          <v-flex>
            <v-card flat class="mx-auto" max-width="800">
              <v-row style="margin-top: 60px">
                <v-col>
                  <v-form style="width: 400px; height: 300px">

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
                        ></v-text-field>
                      </div>
                    </div>

                    <!-- 비밀번호 확인 -->
                    <div class="mx-3">
                      <div class="mx-1">
                        <v-text-field
                            placeholder="비밀번호 확인"
                            type="password"
                            v-model="passWord"
                            required
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
                        >닉네임</v-text-field>
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
                        >이름</v-text-field>
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
                        >핸드폰</v-text-field>
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
                      >가입하기</v-btn>
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
  }),

  methods: {
    register() {
      let saveData = {};
      saveData.email = this.email;
      saveData.passWord = this.passWord;
      saveData.nickName = this.nickName;
      saveData.name = this.name;
      saveData.phoneNumber = this.phoneNumber;

      try {
        axios
            .post("http://kosa3.iptime.org:50201/userJoin", JSON.stringify(saveData),{
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              }})
            .then((res) => {
              if (res.status === 201) { // 성공코드 : 201
                console.log(res.data)
              }
            });

      } catch (error) {
         console.error(error);
      }
    },
  },
};
</script>