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
          class="wrapper__input__content"
          v-model="username"
          placeholder="请输入手机号"
        />
      </label>
    </div>
    <div class="wrapper__input">
      <label>
        <input
          class="wrapper__input__content"
          v-model="password"
          placeholder="请输入密码"
          type="password"
        />
      </label>
    </div>
    <div class="wrapper__input">
      <label>
        <input
          class="wrapper__input__content"
          v-model="againPassword"
          placeholder="确认密码"
          type="password"
        />
      </label>
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <router-link :to="{ name: 'Login' }">
      <div class="wrapper__register-link">已有账号去登录</div>
    </router-link>
  </div>
  <Toast v-if="show" :message="toastMessage" />
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "@vue/reactivity";
import { getRegister } from "@/api/summary";
import Toast, { useToastEffect } from "@/components/Toast/Toast";

const useRegisterEffect = showToast => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
    againPassword: ""
  });
  const handleRegister = () => {
    const { username, password, againPassword } = data;
    if (!(username && password && againPassword)) {
      showToast("必填项不能为空");
      return;
    } else if (password !== againPassword) {
      showToast("两次密码输入不一致");
      return;
    }
    getRegister({
      username,
      password
    })
      .then(resp => {
        resp?.errno === 0
          ? router.push({ name: "Login" })
          : showToast("注册失败");
      })
      .catch(() => {
        showToast("请求失败");
      });
  };
  const { username, password, againPassword } = toRefs(data);
  return { username, password, againPassword, handleRegister };
};

export default {
  name: "Register",
  components: { Toast },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const {
      username,
      password,
      againPassword,
      handleRegister
    } = useRegisterEffect(showToast);
    return {
      handleRegister,
      username,
      password,
      againPassword,
      show,
      toastMessage,
      showToast
    };
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
    border: 1px solid rgba(0, 0, 0, 0.10)
    border-radius: 6px

    &__content
      height: .48rem
      border: none
      outline: none
      width: 100%
      background: none
      font-size: .16rem
      color: $content-notice-fontColor

      &::placeholder
        color: $content-notice-fontColor

  &__register-button
    margin: .32rem .4rem .16rem .4rem
    line-height: .48rem
    color: $bgColor
    background: $btn-bgColor
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32)
    border-radius: .04rem
    font-size: .16rem
    text-align: center

  &__register-link
    text-align: center
    font-size: .14rem
    color: $content-notice-fontColor
</style>
