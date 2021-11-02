<template>
  <div>
    <input v-mode="writer" placeholder="글쓴이"/>
    <input v-mode="title" placeholder="제목"/>
    <input v-mode="content" placeholder="내용"/>
    <!--    -->
    <button @click="index !== undefined ? update() : write()">{{ index !== undefined ? '수정' : '작성' }}</button>
  </div>
</template>

<script>
import data from '../../assets/CreateDate/index'

export default {
  name: "TestCreate",
  date() {
    const index = this.$route.params.contentId;
    return {
      data: data,
      index: index,
      writer: index !== undefined ? data[index].writer : "",
      title: index !== undefined ? data[index].title : "",
      content: index !== undefined ? data[index].content : ""
    }
  },
  methods: {
    write() {
      this.data.push({
        writer: this.writer,
        title: this.title,
        content: this.content
      })
      this.$router.push({
        path: '/testR'
      })
    },
    update() {
      data[this.index].writer = this.writer
      data[this.index].title = this.title
      data[this.index].content = this.content
      this.$router.push({
        path: '/testR'
      })
    }
  }
}
</script>

<style scoped>

</style>