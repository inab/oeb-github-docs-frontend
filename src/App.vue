<template>
  <v-app id="inspire">
    <Menu />
    <Content />
  </v-app>
</template>

<script>
import Content from "./components/Content.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  props: {
    source: String
  },
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
  background: lightblue !important;
}
#nprogress .peg {
  display: none !important;
}
</style>
