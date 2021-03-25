<template>
  <div class="wrapper">
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
    <div class="products">
      <div class="products__title">{{ shopName }}</div>
      <div class="products__item" v-for="item in productsList" :key="item._id">
        <img
          :src="item.imgUrl"
          alt="product__item__img"
          class="products__item__img"
        />
        <div class="products__item__detail">
          <h4 class="products__item__title">{{ item.name }}</h4>
          <p class="products__item__price">
            <span>
              <span class="products__item__yen">&yen;</span>
              {{ item.price }} x {{ item.count }}
            </span>
            <span class="products__item__total">
              <span class="products__item__yen">&yen;</span>
              {{ item.price * item.count }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order__price">
        实付金额
        <span>&yen;{{ calculations.price }}</span>
      </div>
      <div class="order__btn">提交订单</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "@/common/cartEffect";
import { useBackRouterEffect } from "@/common/routeBackEffect";

export default {
  name: "OrderConfirmation",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { shopName, productsList, calculations } = useCommonCartEffect(
      shopId
    );
    const { handleBackClick } = useBackRouterEffect();
    return { shopName, productsList, calculations, handleBackClick };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
@import "~@/style/mixins"
.wrapper
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: rgb(248, 248, 248)

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

  .products
    margin: .16rem .18rem .55rem .18rem
    background: $bgColor

    &__title
      padding: .16rem .16rem 0 .16rem
      font-size: .16rem
      color: $content-fontColor

    &__item
      position: relative
      display: flex
      padding: .16rem

      &__img
        width: .46rem
        height: .46rem
        margin-right: .16rem

      &__detail
        flex: 1

      &__title
        line-height: .2rem
        font-size: .14rem
        color: $content-fontColor
        margin: 0
        @include ellipsis

      &__price
        display: flex
        line-height: .2rem
        font-size: .14rem
        color: $highlight-fontColor
        margin: .06rem 0 0 0

      &__total
        flex: 1
        text-align: right
        color: #000

      &__yen
        font-size: .12rem

  .order
    position: fixed
    left: 0
    right: 0
    bottom: 0
    display: flex
    height: .49rem
    line-height: .49rem
    background: $bgColor

    &__price
      flex: 1
      text-indent: .24rem
      font-size: .14rem
      color: $content-fontColor
      span
        font-size: .16rem
        font-weight: bolder

    &__btn
      width: .98rem
      background: $submit-bgColor
      color: $bgColor
      text-align: center
      font-size: .14rem
</style>
