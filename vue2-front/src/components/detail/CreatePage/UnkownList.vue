<template>
  <div>
    <div class="main">
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
           data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
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
                <div class="mt-2">Value: {{ text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="save_plan">
        <div class="sub_main">
          <div class="left">
            <div>{{ this.region }}</div>
            <date-picker
                class="datepicpick"
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

              </div>
            </div>
          </div>
          <div class="thr_main">
            <!--            -->
            <div
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
            </div>

            <div>
              <b-button variant="outline-primary" type="submit" @click="dayList_add">일정추가</b-button>
              <b-button variant="outline-primary" type="submit" @click="dayList_delete">일정삭제</b-button>
            </div>
          </div>

          <div class="right">
            <div>추천 장소</div>
            <div>
              <RecomPlace :recomList="recomList" @recived="planList_add" class="right_list"/>
            </div>
          </div>
        </div>
        <!--        <div class="right">
                  <div>추천 장소</div>
                  <div>
                    <RecomPlace :recomList="recomList" @recived="planList_add"/>
                  </div>
                </div>-->
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="SavePlan">Save</b-button>
      </div>
    </div>
  </div>
</template>


<script>
import data from '../../../assets/test/spot-card'
export default {
  name: "UnkownList",
  el: 'spotcard',
  data() {
      datas: data
  }
}
</script>

<style scoped>
.spot-card {
  box-shadow: 0px 8px 32px 0px;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 16px 8px !important;
  display: flex;
  position: relative;
}
#spotsList img {
  width: 80px !important;
  height: 80px !important;
  max-width: none !important;
  object-fit: cover;
}
</style>