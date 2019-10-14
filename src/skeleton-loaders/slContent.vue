<template>
  <v-skeleton-loader
    background-color="blue"
    ref="skeleton"
    :boilerplate="boilerplate"
    :type="type"
    :tile="tile"
    class="mx-auto"
  ></v-skeleton-loader>
</template>

<script>
export default {
  // Vuetify components provide
  // a theme variable that is
  // used to determine dark
  inject: ["theme"],

  data: () => ({
    boilerplate: false,
    tile: false,
    type: "article",
    types: []
  }),

  mounted() {
    this.types = Object.keys(this.$refs.skeleton.rootTypes);
  }
};
</script>

<style lang="scss" scoped>
</style>