
/*
* 此文档用于建立url(路由)与页面的映射关系
* 默认访问页面为首页
*/
import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,	// 这个是会让路径出现一个#号的路由历史，其上的是不会出现#的
  RouteRecordRaw,
} from "vue-router";

import Home from '@/views/Home/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/", 
    name: "Home",
    redirect: "/home",
    component: {
      Home,
    },
    meta: {
      title: "首页",
    },
    children: [
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
