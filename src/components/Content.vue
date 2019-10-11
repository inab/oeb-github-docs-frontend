
<template>
  <span>
    <v-content>
      <v-container class="fill-height" fluid>
        <span v-html="content"></span>
      </v-container>
    </v-content>
  </span>
</template>



<script>
export default {
  name: "Content",
  data() {
    return {
      content: process.env.VUE_APP_DESC
    };
  },
  computed: {
    clickedUrl() {
      return this.$store.state.url.clickedUrl;
    }
  },
  watch: {
    clickedUrl(newValue) {
      this.getContent(newValue);
    }
  },
  methods: {
    async getContent(clickedUrl) {
      let config = {
        headers: {
          "Content-type": "text/html;charset=UTF-8"
        }
      };
      const content = await this.$http.get(this.$baseUrl + clickedUrl, config);
      return (this.content = content.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
