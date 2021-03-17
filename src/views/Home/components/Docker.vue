<template>
  <div className="docker">
    <div className="docker__item docker__item--active">
      <div className="iconfont">&#xe607;</div>
      <div className="docker__title">首页</div>
    </div>
    <div className="docker__item">
      <div className="iconfont">&#xe6bc;</div>
      <div className="docker__title">购物车</div>
    </div>
    <div className="docker__item">
      <div className="iconfont">&#xe616;</div>
      <div className="docker__title">订单</div>
    </div>
    <div className="docker__item">
      <div className="iconfont">&#xe681;</div>
      <div className="docker__title">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker"
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.docker
  display: flex
  box-sizing: border-box
  position: absolute
  padding: 0 .18rem
  left: 0
  bottom: 0
  width: 100%
  height: .49rem
  border-top: .01rem solid $content-bgColor
  color: $content-fontColor

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
