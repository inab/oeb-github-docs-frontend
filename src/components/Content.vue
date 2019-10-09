<template>
  <span>

    <div class="menu">
      <div class="title">REPOS   &#x21A5;</div>
      <ul class="nav">
        <li v-for="m in menu" :key="m.index">
          <a @click="getContent(m)">{{m}}</a>
        </li>
      </ul>
    </div>
  
    <div class="content">
      
      <span v-html="content"></span>
    </div>

  </span>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      menu: '',
      content: process.env.VUE_APP_DESC
    };
  },
  created() {
    this.getMenu();    
  },
  methods: {
    async getContent(m){
      let config = {
        headers: {
          'Content-type': 'text/html;charset=UTF-8'
        }
      };
      const content = await this.$http.get(this.$baseUrl+m, config);
      this.content = content.data;
    },
    async getMenu() {
      let config = {
        headers: {
          'Accept': 'application/json'
        }
      };
      const menu = await this.$http.get(this.$baseUrl, config);      
      //await this.getContent(menu.data[0]);      
      this.menu = menu.data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  
}

.menu {
  font-weight: 100;
  background: #efefef;
  width: 500px;
  height: 100%;
  padding-left: 100px;
  position: fixed;
  z-index: 100;
  -webkit-box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
  right: -480px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  color: #222;
}
.menu:hover, .menu:focus {
  transform: translate3d(-480px, 0, 0);
  animation-timing-function: 1s ease-in;
}
.menu .title {
  top: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  transform: rotate(270deg);
  left: 0px;
  font-weight: 800;
  font-size: 20px;
}
.menu .nav {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-weight: 100;
}
.menu .nav li {
  padding-bottom: 30px;
  list-style-type: none;
}
.menu .nav li a {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
.menu .nav li a:hover {
  color: #aaa;
}

.content{
  width: 80%;
  background:white;  
  padding: 2%;
  border:solid 2px #efefef;
  margin: 2% 0 2% 2%;
}

</style>
