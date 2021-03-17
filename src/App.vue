<template>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe607;</div>
      <div class="docker__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe6bc;</div>
      <div class="docker__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe616;</div>
      <div class="docker__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe681;</div>
      <div class="docker__title">我的</div>
    </span>
  </div>
</template>

<style lang="sass">
.docker
  display: flex
  box-sizing: border-box
  position: absolute
  padding: 0 .18rem
  left: 0
  bottom: 0
  width: 100%
  height: .49rem
  border-top: 1px solid #F1F1F1

  &__item
    flex: 1
    text-align: center

    .iconfont
      margin: .07rem 0 .02rem 0
      font-size: .18rem

    &--active
      color: #1FA4FC

  &__title
    font-size: .2rem
    transform: scale(.5, .5)
    transform-origin: center top
</style>
