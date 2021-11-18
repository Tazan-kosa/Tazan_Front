<template>
  <div class="itembox mb-2" @click="viewURL(item.reviewID)">
    <ReviewItem :item="item"/>
  </div>
</template>

<script>
import ReviewItem from './ReviewItem'

export default {
  name: 'ReviewBox',
  components: {
    ReviewItem,
  },
  props: {
    item: Object,
    checkedtag: Array
  },
  methods: {
    viewURL(link) {
      this.$router.push(`/reviewDetail/${link}`).then((() => window.scrollTo(0, 0)))
    }
  }
}
</script>

<style scoped>
div.itembox {
  width: 265px;
  margin: 5px;
  padding: 0;
}

div.itembox {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;
}

div.itembox:hover {
  cursor: pointer;
  background: #845EC2;
  border-radius: 10px;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
</style>