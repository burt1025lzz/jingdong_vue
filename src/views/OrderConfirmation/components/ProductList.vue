<template>
  <div class="products">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__list">
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
              {{ (item.price * item.count).toFixed(2) }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "@/common/cartEffect";

export default {
  name: "ProductList",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { shopName, productsList } = useCommonCartEffect(shopId);
    return { shopName, productsList };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
@import "~@/style/mixins"
.products
  margin: .16rem .18rem .2rem .18rem
  background: $bgColor

  &__title
    padding: .16rem .16rem 0 .16rem
    font-size: .16rem
    color: $content-fontColor

  &__list
    margin-bottom: .65rem

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
</style>
