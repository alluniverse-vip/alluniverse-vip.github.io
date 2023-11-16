import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
    meta: { hidden: true },
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
  },
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
