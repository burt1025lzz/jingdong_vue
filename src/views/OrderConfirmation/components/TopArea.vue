<template>
  <div class="top">
    <div class="top__header">
      <div class="top__header__back iconfont" @click="handleBackClick">
        &#xe625;
      </div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">
        北京理工大学国防科技园2号楼10层
      </div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__content">瑶妹（先生）</span>
        <span class="top__receiver__info__content">18911024266</span>
      </div>
      <div class="top__receiver__icon iconfont">&#xe625;</div>
    </div>
  </div>
</template>

<script>
import { useBackRouterEffect } from "@/common/routeBackEffect";

export default {
  name: "TopArea",
  setup() {
    const { handleBackClick } = useBackRouterEffect();
    return { handleBackClick };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.top
  position: relative
  height: 1.96rem
  background-size: 100% 1.59rem
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%)
  background-repeat: no-repeat

  &__header
    position: relative
    padding-top: .26rem
    line-height: .24rem
    font-size: .16rem
    color: $bgColor
    text-align: center

    &__back
      position: absolute
      font-size: .22rem
      left: .18rem

  &__receiver
    position: absolute
    left: .18rem
    right: .18rem
    bottom: 0
    height: 1.11rem
    background: $bgColor
    border-radius: .04rem

    &__title
      line-height: .22rem
      padding: .16rem 0 .14rem .16rem
      font-size: .16rem
      color: $content-fontColor

    &__address
      line-height: .2rem
      padding: 0 .4rem 0 .16rem
      font-size: .14rem
      color: $content-fontColor

    &__info
      padding: .06rem 0 0 .16rem

      &__content
        margin-right: .06rem
        line-height: .18rem
        font-size: .12rem
        color: $medium-fontColor

    &__icon
      position: absolute
      right: .16rem
      top: .5rem
      color: $medium-fontColor
      font-size: .16rem
      transform: rotate(180deg)
</style>
