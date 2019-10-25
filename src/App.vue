<template>
  <span>
    <router-link to="/oeb">OpenEBench documentation</router-link>
    <router-link to="/wg">Widget gallery</router-link>

    <router-view></router-view>
  </span>
</template>


<script>
export default {
  name: "App",
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
