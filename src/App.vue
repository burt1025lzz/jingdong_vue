<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe613;</span>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe607;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6bc;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe616;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe681;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="sass">
@import "style/viriables"
@import "style/mixins"
.wrapper
  position: absolute
  top: 0
  right: 0
  bottom: .5rem
  left: 0
  padding: 0 .18rem

  .position
    position: relative
    padding: .16rem .24rem .16rem 0
    line-height: .22rem
    font-size: .16rem
    color: $content-fontcolor
    @include ellipsis

    &__icon
      position: relative
      top: .01rem
      font-size: .2rem
    &__notice
      position: absolute
      top: .17rem
      right: 0
      font-size: .2rem

.docker
  display: flex
  box-sizing: border-box
  position: absolute
  padding: 0 .18rem
  left: 0
  bottom: 0
  width: 100%
  height: .49rem
  border-top: .01rem solid #F1F1F1
  color: $content-fontcolor

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
