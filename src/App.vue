<template>
  <span id="app">    
    <Content/>
  </span>
</template>

<script>
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Content
  }
}
</script>

<style>
*{
  overflow-x:auto;
}
body {
  padding: 0%;
  margin: 0%;
  font-family: 'Muli', sans-serif;
  font-size:20px;
  line-height: 1.5;
  word-wrap: break-word;
}
.readme{
  font-weight: bold;
  color: #222;
}
</style>
