<template>
  <span>
    <v-navigation-drawer v-model="drawer" app>
      <v-subheader>REPOSITORIES</v-subheader>
      <v-list dense v-for="m in menu" :key="m.index">
        <v-list-item @click="setUrlForContent(m)">
          <v-list-item-content>
            <v-list-item-title>{{m}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Documentation</v-toolbar-title>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "Menu",
  created() {
    this.getMenu();
  },
  data() {
    return {
      menu: "",
      drawer: null
    };
  },
  methods: {
    async getMenu() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const menu = await this.$http.get(
        this.$baseUrl + this.$route.params.id,
        config
      );
      this.menu = menu.data;
    },
    setUrlForContent(m) {
      this.$store.commit("url/updateUrl", m);
    }
  }
};
</script>

<style lang="css" scoped>
</style>