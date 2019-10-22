<template>
  <v-app>
    <Menu />
    <Content />
  </v-app>
</template>

<script>
import Content from "./components/Content.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Content,
    Menu
  },
  data: () => ({})
};
</script>

<style>
* {
  overflow-x: auto;
}

#nprogress .bar {
  background: red !important;
}
#nprogress .peg {
  display: none !important;
}
</style>
