<template>
  <!-- Scrollable modal -->
  <div>
    <p id="mylist-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">내 계획 불러오기</p>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">나의 계획</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-for="(item, i) in myplan" :key="i" class="container">
              <div class="myplan">
                <span class="myplan-region">{{ item.region }}</span>
                <span class="myplan-date">{{ item.date }}</span>
                <span class="myplan-title">{{ item.title }}</span>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  neme: 'MyPlanModal',
  data() {
    return {
      myplan: [
        {
          'region': "서울",
          'title': "서울 궁궐투어",
          'date': "2021.10.10 - 2021.10.12"
        },
        {
          'region': "부산",
          'title': "부산 맛집 투어",
          'date': "2021.10.10 - 2021.10.12"
        },
        {
          'region': "대전",
          'title': "대전 축제 즐기기",
          'date': "2021.10.10 - 2021.10.12"
        },
        {
          'region': "강릉",
          'title': "강릉 바다 뽀개기",
          'date': "2021.10.10 - 2021.10.12"
        },
      ]
    }
  }

}
</script>

<style scoped>
#mylist-btn {
  width: fit-content;
  height: fit-content;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.myplan {
  width: 100%;
  height : 100px;
  position: relative;
}

.myplan-region {
  width:fit-content;
  height:fit-content;
  background-color: #ccc;
  text-align: left;
}

.myplan-date {
  width:fit-content;
  height: fit-content;
  position: absolute;
}

.myplan-title {
  width:fit-content;
  height: fit-content;
  position: absolute;
  margin-bottom: 0px;
  text-align: right;
}
</style>