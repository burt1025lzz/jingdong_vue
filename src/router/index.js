import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Home";
import Login from "@/views/Login/Login";
import Register from "@/views/Register/Register";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
