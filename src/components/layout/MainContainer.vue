<template>
  <div class="container-box">
    <main-header></main-header>
    <main-sidebar></main-sidebar>
    <div class="content">
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
.content {
  width: calc(100% - 290px);
  padding: 30px;
  position: absolute;
  top: 50px;
  left: 230px;
  bottom: 0;
  background-color: #f0f0f0;
}
</style>