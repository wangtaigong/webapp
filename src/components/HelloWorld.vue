<template>
  <div class="hello">
    {{clientWidth}}
    <br>
    {{clientHeight}}
    <br>
    {{fontSize}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      clientWidth: 0,
      clientHeight: 0,
      fontSize: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    initData () {
      this.clientWidth = window.document.documentElement.clientWidth
      this.clientHeight = window.document.documentElement.clientHeight
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
