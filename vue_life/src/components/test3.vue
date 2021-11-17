<template>
  <div>
    <div class="main">
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
           data-src=region.img
           data-srcset="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w"
           data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
        <div class="container px-4 px-lg-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">
              <span id="userName">{{ userName }}</span>님의 여행 계획표
            </h1>
            <br>

            <div class="wrap">
              <div class="sub_title">
                <b-form-input
                    v-model="text"
                    placeholder="여행 제목을 적어 주세요."
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="uk-heading-line"><span></span></h1>

      <div class="save_plan container-fluid">
        <div class="sub_main">

          <div class="left">

              <h2 class="">
                {{ this.region }}
              </h2>


            <date-picker
                class="datepicpick uk-card"
                v-model="mydate"
                type="date"
                :lang="lang"
                range
                confirm
                format="YYYY-MM-DD"
                placeholder="Select date range"
            >
              여행일자
            </date-picker>
            <div>
              <div>
                확인하는중입니다.
              </div>
            </div>
          </div>

          <div class="thr_main">
            <!--            -->
            <v-col
                class="thr_main_sub"
                v-for="(plan,index) in totalPlan"
                :key="index"
            >
              <div class="thr_main_day">
                {{ index + 1 }} 일차
              </div>

              <DayList
                  id="scrollDiv"
                  :daylist="plan"
                  class="thr_main_list"
                  :index1="index"
                  @tourListDelete="DeleteList"
              >
              </DayList>
            </v-col>

            <div class="">
              <b-button pill variant="outline-primary" type="submit" @click="dayList_add">일정 추가</b-button>
              &nbsp;
              <b-button pill variant="outline-danger" type="submit" @click="dayList_delete">일정 삭제</b-button>
            </div>
          </div>

          <div class="right">
            <div>추천 장소</div>
            <div>
              <RecomPlace
                  :recomList="recomList"
                  @recived="planList_add"
                  class="right_list"/>
            </div>
          </div>
        </div>
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="SavePlan">Save</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test3"
}
</script>

<style scoped>

</style>