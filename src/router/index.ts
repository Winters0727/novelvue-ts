import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Main from '@/views/Main.vue';
import MyInfo from '@/views/Author/MyInfo.vue';

import BookRoutes from '@/router/book';
import ReviewRoutes from '@/router/review';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/mypage',
    name: 'MyInfo',
    component: MyInfo,
  },
  ...BookRoutes,
  ...ReviewRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
