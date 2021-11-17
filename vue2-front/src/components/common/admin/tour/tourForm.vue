<template>
  <div class="form-body">
    <div class="row">
      <h3>여행지 입력</h3>
      <p id="essential"><u>※필수 입력 사항 입니다.</u></p>
      <form class="requires-validation" novalidate>
        <div class="row">
          <div class="col-md-1">
            TourID
          </div>
          <div class="col-md-11">
            <input class="form-control TourID" type="text" placeholder="TourID" :value="this.TourItem.tourId">
          </div>
        </div>

        <div class="row">
          <div class="col-md-1">
            Address
          </div>
          <div class="col-md-11">
            <input class="form-control Address" type="text" placeholder="Address" :value="this.TourItem.address">
          </div>
        </div>

        <div class="row">
          <div class="col-md-1">
            Region
          </div>
          <div class="col-md-11">
            <input class="form-control Region" type="text" placeholder="Region" :value="this.TourItem.tourRegion">
          </div>
        </div>

        <div class="row">
          <div class="col-md-1">
            Tag
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <input class="form-control Tag1" type="text" placeholder="Tag1" :value="this.TourItem.tag1">
          </div>
          <div class="col-md-5">
            <input class="form-control Tag2" type="text" placeholder="Tag2" :value="this.TourItem.tag2">
          </div>
        </div>


        <div class="mb-3 row">
          <div class="col-md-1">
            StartDate
          </div>

          <div class="col-5">
            <div class="input-group-icon">
              <input class="form-control startDate" type="date" :value="startdate"/>
            </div>
          </div>
          <div class="col-md-1">EndDate</div>
          <div class="col-5">
            <div class="input-group-icon">
              <input class="form-control endDate" type="date" :value="enddate"/>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-md-1">
            Img
          </div>
          <div class="col-md-11">
            <input class="form-control Img" type="text" placeholder="Img" :value="this.TourItem.img">
          </div>
        </div>

        <div class="row">
          <div class="col-md-1">
            URL
          </div>
          <div class="col-md-11">
            <input class="form-control URL" type="text" placeholder="URL" :value="this.TourItem.url">
          </div>
        </div>

        <div class="row">
          <div class="col-md-1">
            Title
          </div>
          <div class="col-md-11">
            <input class="form-control Title" type="text" placeholder="Title" :value="this.TourItem.title">
          </div>
        </div>

        <p class="mt-10">선택 입력 사항 입니다.</p>
        <details>
          <summary>펼치기/접기</summary>
          <div class="row">
            <div class="col-md-1">
              Longitude
            </div>
            <div class="col-md-3">
              <input class="form-control Longitude" type="text" placeholder="경도" :value="this.TourItem.longitude">
            </div>
            <div class="col-md-1">
              Latitude
            </div>
            <div class="col-md-3">
              <input class="form-control Latitude" type="text" placeholder="위도" :value="this.TourItem.latitude">
            </div>
            <div class="col-md-1">
              Contact
            </div>
            <div class="col-md-3">
              <input class="form-control Contact" type="text" placeholder="Contact" :value="this.TourItem.contact">
            </div>
          </div>
        </details>

        <div class="form-button mt-3">
          <div class="btn btn-primary" @click="submitTour">수정하기</div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "tourForm",
  data() {
    return {
      tourId: '',
      TourItem: [],
      startdate: '',
      enddate: '',
    }
  },
  created() {
    var temp = new Date()
    var year = temp.getFullYear();
    var month = temp.getMonth() + 1;
    var day = temp.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    this.startdate = year + '-' + month + '-' + day
    this.enddate = year + '-' + month + '-' + day
    this.tourId = this.$route.params.tourId
    if(this.tourId){
      axios.get(`http://kosa3.iptime.org:50201/tour/getTourId/${this.tourId}`)
          .then(result => {
            this.TourItem = result.data
            this.startdate=this.TourItem.startDate.slice(0,10);
            this.enddate=this.TourItem.endDate.slice(0,10);
          })
          .catch(function (err) {
            console.log("에러발생: " + err)
          })
    }
  },
  methods:{
    submitTour(){
      var tourVO={}

      tourVO.tourId=document.getElementsByClassName("TourID")[0].value;
      tourVO.address=document.getElementsByClassName("Address")[0].value;
      tourVO.tourRegion=document.getElementsByClassName("Region")[0].value;
      tourVO.tag1=document.getElementsByClassName("Tag1")[0].value;
      tourVO.tag2=document.getElementsByClassName("Tag2")[0].value;

      tourVO.startDate=document.getElementsByClassName("startDate")[0].value;
      tourVO.endDate=document.getElementsByClassName("endDate")[0].value;
      tourVO.img=document.getElementsByClassName("Img")[0].value;
      tourVO.url=document.getElementsByClassName("URL")[0].value;
      tourVO.title=document.getElementsByClassName("Title")[0].value;

      tourVO.longitude=document.getElementsByClassName("Longitude")[0].value;
      tourVO.latitude=document.getElementsByClassName("Latitude")[0].value;
      tourVO.contact=document.getElementsByClassName("Contact")[0].value;

      axios.put(`http://kosa3.iptime.org:50201/tour/updateTour`,tourVO, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },}).then(res => {
        if (res.status == 200) {
          alert("수정되었습니다.")
          this.$router.push("/adminpage/tour")
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

*, body {
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  height: 100%;
  background-color: #152733;
  overflow: hidden;
}

h3 {
  color: #e9eef5;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #00BF72;
  outline: none;
  border: 0px;
  box-shadow: none;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active {

  background-color: #008F7A;

}

#essential {
  color: red;
  margin-bottom: 0px;
}

.col-md-1 {
  text-align: center;
  margin: 0 auto;
}
</style>