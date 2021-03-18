import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home/Home")
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "@/views/Shop/Shop")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/Register/Register"),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login/Login"),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  !isLogin && to.name !== "Login" && to.name !== "Register"
    ? next({ name: "Login" })
    : next();
});

export default router;
