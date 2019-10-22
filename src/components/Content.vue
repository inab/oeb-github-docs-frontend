
<template>
  <span>
    <v-content>
      <slContent v-show="content==null" fluid />
      <v-container v-show="content!=null" fluid>
        <v-sheet v-html="content" fluid></v-sheet>
      </v-container>
    </v-content>
  </span>
</template>



<script>
import slContent from "@/skeleton-loaders/slContent.vue";
export default {
  components: {
    slContent
  },
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
      this.content = null;
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

      const content = await this.$http.get(
        this.$baseUrl + this.$gh + clickedUrl,
        config
      );
      return (this.content = content.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
