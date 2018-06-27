import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router;
export default router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/page/Home.vue'], resolve),
      children: [
        {
          path: '/home',
          component: resolve => require(['../components/page/Home.vue'], resolve),
          meta: { title: '系统首页' }
        },
      ]
    },
  ]
});