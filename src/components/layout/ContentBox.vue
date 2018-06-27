<template>
  <div class="wrapper">
    <main-header></main-header>
    <main-sidebar></main-sidebar>
    <div class="content-box">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import MainHeader from './MainHeader.vue';
import MainSidebar from './MainSidebar.vue';

export default {
  components: {
    MainHeader,
    MainSidebar,
  }
}
</script>

<style scoped>
.content-box {
  position: absolute;
  top: 50px;
  left: 240px;
  bottom: 0;
}
</style>