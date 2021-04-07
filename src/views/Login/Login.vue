<template>
  <div class="wrapper">
    <img
      alt="wrapper__img"
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <label>
        <input
          v-model="username"
          class="wrapper__input__content"
          placeholder="请输入手机号"
        />
      </label>
    </div>
    <div class="wrapper__input">
      <label>
        <input
          v-model="password"
          class="wrapper__input__content"
          placeholder="请输入密码"
          type="password"
        />
      </label>
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <router-link :to="{ name: 'Register' }">
      <div class="wrapper__login-link">立即注册</div>
    </router-link>
  </div>
  <Toast v-if="show" :message="toastMessage" />
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { getLogin } from "@/api/summary";
import Toast, { useToastEffect } from "@/components/Toast/Toast";

const useLoginEffect = showToast => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: ""
  });
  const handleLogin = async () => {
    const { username, password } = data;
    if (!(username && password)) {
      showToast("手机号或密码不能为空!");
      return;
    }
    try {
      const result = await getLogin({
        username,
        password
      });
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        await router.push({ name: "Home" });
      } else {
        showToast("登录失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return { handleLogin, username, password };
};

export default {
  name: "Login",
  components: { Toast },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { handleLogin, username, password } = useLoginEffect(showToast);
    return { handleLogin, show, toastMessage, username, password };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.wrapper
  position: absolute
  top: 50%
  left: 0
  right: 0
  transform: translateY(-50%)

  &__img
    display: block
    margin: 0 auto .4rem auto
    height: .66rem
    width: .66rem

  &__input
    height: .48rem
    margin: 0 .4rem .16rem .4rem
    padding: 0 .16rem
    background: #F9F9F9
    border: .01rem solid rgba(0, 0, 0, 0.10)
    border-radius: .06rem

    &__content
      margin-top: .12rem
      line-height: .22rem
      border: none
      outline: none
      width: 100%
      background: none
      font-size: .16rem
      color: $content-notice-fontColor

      &::placeholder
        color: $content-notice-fontColor

  &__login-button
    margin: .32rem .4rem .16rem .4rem
    line-height: .48rem
    color: $bgColor
    background: $btn-bgColor
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32)
    border-radius: .04rem
    font-size: .16rem
    text-align: center

  &__login-link
    text-align: center
    font-size: .14rem
    color: $content-notice-fontColor
</style>
