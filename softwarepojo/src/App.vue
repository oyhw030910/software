

<template>
  <router-view></router-view>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0;
  color: #2c3e50;
}

</style>
<script>
import 'boxicons'
import mainView from './views/main.vue'
export default {
  components:{
    mainView
  }
}
</script>
