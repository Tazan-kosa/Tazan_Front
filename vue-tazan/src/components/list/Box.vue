<template>
<!--  <div class="box">-->
    <div class="col mb-5" v-if="checkedtag.filter(n => item.tag.includes(n)).length > 0">
      <div class="card h-100" >
        <!-- Product image-->
        <img class="card-img-top" :src="item.img" alt="...">
        <!-- Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!-- Product name-->
            <a href="#">
              <h5 class="fw-bolder">{{ item.title }}</h5>
            </a>
            <!-- Product reviews-->
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
            </div>
            <!-- Product price-->
            {{ item.content }}
            <br>
            {{item.tag}}
          </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center"><a class="btn btn-outline-dark mt-auto" :href="item.url" target="_blank">바로가기</a>
          </div>
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<script>
export default {
  name: 'box',

  props: {
    item: Object,
    checkedtag:Array
  },
}
</script>

<style scoped>

</style>