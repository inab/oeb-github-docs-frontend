<template>
  <span>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Documentation</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-subheader>PROJECTS</v-subheader>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/oeb">
                <v-btn text isactive medium color="blue">OpenEBench docs</v-btn>
              </router-link>
            </v-list-item-title>
            <v-list-item-title>
              <router-link to="/wg">
                <v-btn text medium color="orange">Widget gallery</v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <span v-if="menu!=''">
        <v-subheader>REPOSITORIES</v-subheader>
        <v-list dense v-for="(v,k) in menu" v-bind:key="k">
          <v-list-item @click="setUrlForContent(k)">
            <v-list-item-content>
              <v-list-item-title>{{v}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </span>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "Menu",
  created() {
    this.$route.params.id ? this.getMenu(this.$route.params.id) : "";
  },
  data() {
    return {
      menu: "",
      drawer: null
    };
  },
  watch: {
    $route(to, from) {
      if (to.params.id != from.params.id) {
        this.getMenu(to.params.id);
      }
    }
  },
  methods: {
    async getMenu(id) {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const menu = await this.$http.get(this.$baseUrl + id, config);
      this.menu = menu.data;
    },
    setUrlForContent(m) {
      this.$router
        .push({
          name: "projectAndRepo",
          params: { repository: m }
        })
        .catch();
      this.$store.commit("url/updateUrl", m);
    }
  }
};
</script>

<style lang="css" scoped>
</style>