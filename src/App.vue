<template>
  <div id="app">
    <main-header></main-header>
    <main-sidebar></main-sidebar>
    <content-box>
      <router-view></router-view>
    </content-box>
  </div>
</template>

<script>
import ContentBox from './components/layout/ContentBox.vue';

export default {
  name: 'app',
  components: {
    ContentBox,
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
