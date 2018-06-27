import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

// 判断是否登录
router.beforeEach((to, from, next) => {
  const admin = localStorage.getItem('adminUsername');
  if (!admin && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
