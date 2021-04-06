import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home/Home")
  },
  {
    path: "/cartList",
    name: "CartList",
    component: () =>
      import(/* webpackChunkName: "cartList" */ "@/views/CartList/CartList")
  },
  {
    path: "/orderList",
    name: "OrderList",
    component: () =>
      import(/* webpackChunkName: "orderList" */ "@/views/OrderList/OrderList")
  },
  {
    path: "/orderConfirmation/:id",
    name: "OrderConfirmation",
    component: () =>
      import(
        /* webpackChunkName: "orderConfirmation" */ "@/views/OrderConfirmation/OrderConfirmation"
      )
  },
  {
    path: "/shop/:id",
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
