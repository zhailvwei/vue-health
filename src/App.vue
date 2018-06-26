<template>
  <div id="app">
    <main-header></main-header>
    <main-sidebar></main-sidebar>
  </div>
</template>

<script>
import MainHeader from './components/layout/MainHeader.vue';
import MainSidebar from './components/layout/MainSidebar.vue';

export default {
  name: 'app',
  components: {
    MainHeader,
    MainSidebar
  }
}
</script>

<style>
@import "~@/assets/css/reset.css";
@import "~@/assets/fonts/iconfont.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
