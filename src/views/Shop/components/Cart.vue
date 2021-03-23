<template>
  <div class="cart">
    <div class="product">
      <template v-for="item in productsList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <img
            :src="item.imgUrl"
            alt="product__item__img"
            class="product__item__img"
          />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, -1);
                }
              "
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          alt="check__icon__img"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计: <span class="check__info__price">&yen; {{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useCommonCartEffect } from "@/views/Shop/common/cartEffect";

// 获取购物车信息逻辑
const useCartEffect = () => {
  const store = useStore();
  const route = useRoute();
  const shopId = route.params.id;
  const cartList = store.state.cartList;

  const total = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });

  const price = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count * product.price;
      }
    }
    return count.toFixed(2);
  });

  const productsList = computed(() => {
    return cartList[shopId] || [];
  });

  return { total, price, productsList, shopId };
};

export default {
  name: "Cart",
  setup() {
    const { total, price, productsList, shopId } = useCartEffect();
    const { changeCartItemInfo } = useCommonCartEffect();
    return { total, price, productsList, shopId, changeCartItemInfo };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
@import "~@/style/mixins"

.cart
  position: absolute
  left: 0
  right: 0
  bottom: 0

  .product
    overflow-y: scroll
    flex: 1
    background-color: #FFF

    &__item
      position: relative
      display: flex
      padding: .12rem 0
      margin: 0 .16rem
      border-bottom: .01rem solid $content-bgColor

      &__detail
        overflow: hidden

      &__img
        width: .46rem
        height: .46rem
        margin-right: .16rem

      &__title
        line-height: .2rem
        font-size: .14rem
        color: $content-fontColor
        margin: 0
        @include ellipsis


      &__price
        line-height: .2rem
        font-size: .14rem
        color: $highlight-fontColor
        margin: .06rem 0 0 0

      &__yen
        font-size: .12rem

      &__origin
        margin-left: .06rem
        line-height: .2rem
        font-size: .12rem
        color: $light-fontColor
        text-decoration: line-through

    &__number
      position: absolute
      right: 0
      bottom: .12rem

      &__minus, &__plus
        display: inline-block
        width: .2rem
        height: .2rem
        line-height: .16rem
        border-radius: 50%
        font-size: .2rem
        text-align: center

      &__minus
        border: .01rem solid $medium-fontColor
        color: $medium-fontColor
        margin-right: .05rem

      &__plus
        background: $btn-bgColor
        color: $bgColor
        margin-left: .05rem

  .check
    display: flex
    box-sizing: border-box
    height: .5rem
    border-top: .01rem solid $content-bgColor
    line-height: .5rem

    &__icon
      position: relative
      width: .84rem

      &__img
        display: block
        margin: .12rem auto
        width: .28rem
        height: .26rem

      &__tag
        position: absolute
        left: .46rem
        top: .04rem
        min-width: .2rem
        height: .2rem
        padding: 0 .04rem
        background-color: $highlight-fontColor
        border-radius: .1rem
        line-height: .2rem
        text-align: center
        font-size: .12rem
        color: $bgColor
        transform: scale(.5)
        transform-origin: left center

    &__info
      flex: 1
      color: $content-fontColor
      font-size: .12rem

      &__price
        color: $highlight-fontColor
        font-size: .18rem

    &__btn
      width: .98rem
      color: $bgColor
      background-color: #4FB0F9
      font-size: .14rem
      text-align: center
</style>
