<template>
  <div id="app">
    <h1>테스트 1</h1>
    <div class="test" v-for="post in posts" :key="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.userId }}</p>
      <p>{{ post.body }}</p>
    </div>
    <h1>테스트 2</h1>
    <div>
      {{ message1 }}
    </div>
    <h1>테스트 3</h1>
    <span v-bind:title="message2">
      마우스 올려봐
    </span>
    <h1>테스트 4</h1>
    <p v-if="seen">조거문 테스트 메시지</p>

    <h1>테스트 5</h1>
    <ol>
      <li v-for="todo in todos" :key="todo">
        {{ todo.text }}
      </li>
    </ol>

    <h1>테스트 6</h1>
    <p>
      {{ message3 }}
    </p>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>

    <h1>테스트 7</h1>
    <p>
      {{ message4 }}
    </p>
    <input v-model="message4">

    <h1>테스트 8</h1>
    <ol>
      <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
      >
        <li>{{ item.text }}</li>
      </todo-item>
    </ol>

    <h1>인스턴스 생성, watch(감시자_예제</h1>
    <h1>테스트 9</h1>
    <h1>Vue.js - 인스턴스 생성 & Watch</h1>
    <h5>Count : {{ test }}</h5>
    <button v-on:click="text += 1">Add 1</button>

  </div>
</template>

<script>
// var data = { test: 0};
// console.log(data.test === data.test)
// console.log(data.$data === data)

// data.$watch('test', function (newVal, oldVal) {
//   console.log('이전 데이터', oldVal);
//   console.log('변경 데이터', newVal);
// })

export default {
  name: 'test1',
  data() {
    return {
      posts: [],
      message1: '안녕, ohayo my night',
      message2: '이 페이지는 ' + new Date() + ' 에 로드',
      seen: true,
      todos: [
        { text: '하나'},
        { text: '둘'},
        { text: '셋'}
      ],
      message3: '대한민국',
      message4: '안녕하세요',
      groceryList: [
        { id: 0, text: '록시땅'},
        { id: 1, text: '400km'},
        { id: 2, text: '람보르기니'},
        { id: 3, text: '반복'}
      ],
      // data: data
    }
  },
  props: {

  },
  methods: {
    reverseMessage: function () {
      this.message3 = this.message3.split('').reverse().join('')
    },
    // created: function() {
    //   console.log('test is: ' + this.test)
    // }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
          if(response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok');
        })
        .then((json) => {
          this.posts.push({
            userId: json.userId,
            title: json.title,
            body: json.body
          });
        })
        .catch((error) => {
          console.log(error);
        })

  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
