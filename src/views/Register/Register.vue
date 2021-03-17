<template>
  <div class="wrapper">
    <img
      alt="wrapper__img"
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="确认密码"
        type="password"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <router-link :to="{ name: 'Login' }">
      <div class="wrapper__register-link">已有账号去登录</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Register",
  setup() {
    const handleRegister = () => {};
    return { handleRegister };
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
    color: #FFF
    background: #0091FF
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32)
    border-radius: .04rem
    font-size: .16rem
    text-align: center

  &__register-link
    text-align: center
    font-size: .14rem
    color: $content-notice-fontColor
</style>
