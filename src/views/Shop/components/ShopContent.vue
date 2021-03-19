<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt="product__item__img"
          class="product__item__img"
        />
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄250g/份</h4>
          <p class="product__item__sales">月售10件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>33.6
            <span class="product__item__origin">&yen;66.6</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopContent"
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.content
  display: flex
  position: absolute
  top: 1.5rem
  right: 0
  bottom: .5rem
  left: 0

  .category
    overflow-y: scroll
    width: .76rem
    background: #F5F5F5
    height: 100%

    &__item
      line-height: .4rem
      text-align: center
      font-size: .14rem
      color: $content-fontColor

      &--active
        background: #FFF

  .product
    overflow-y: scroll
    flex: 1

    &__item
      display: flex
      padding: .12rem 0
      margin: 0 .16rem
      border-bottom: .01rem solid #F1F1F1

      &__img
        width: .68rem
        height: .68rem
        margin-right: .16rem

      &__title
        line-height: .2rem
        font-size: .14rem
        color: $content-fontColor
        margin: 0

      &__sales
        margin: .1rem 0 .03rem 0
        height: .16rem
        font-size: .12rem
        color: $content-fontColor

      &__price
        line-height: .2rem
        font-size: .14rem
        color: #E93B3B
        margin: 0

      &__yen
        font-size: .12rem

      &__origin
        margin-left: .06rem
        line-height: .2rem
        font-size: .12rem
        color: #999
        text-decoration: line-through
</style>
