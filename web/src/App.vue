<template>
  <div id="app">
        <div class="line"></div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/" >文章</el-menu-item>
            <el-menu-item index="/publish" >发表</el-menu-item>
            <el-menu-item index="/me" >我的</el-menu-item>
            <el-menu-item index="more" >more</el-menu-item>
        </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {

      handleSelect (key, keyPath) {
        console.log(key, keyPath);
        this.$router.push({ path: key })
      }

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  
}
.el-menu-demo{
margin-bottom:22px
}
*{
  padding: 0;
  margin:0;
}
ul,li{
  list-style: none;
}
</style>
