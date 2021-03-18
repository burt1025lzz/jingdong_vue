<template>
  <div className="shop">
    <img className="shop__img" alt="shop__img" :src="item.imgUrl" />
    <div
      :class="{ shop__content: true, 'shop__content--bordered': hideBorder }"
    >
      <div className="shop__content__title">{{ item.name }}</div>
      <div className="shop__content__tags">
        <span className="shop__content__tag">月售: {{ item.sales }}</span>
        <span className="shop__content__tag"
          >起送: {{ item.expressLimit }}</span
        >
        <span className="shop__content__tag"
          >基础运费: {{ item.expressPrice }}</span
        >
      </div>
      <p className="shop__content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"]
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.shop
  display: flex
  padding-top: .12rem

  &__img
    margin-right: .16rem
    width: .56rem
    height: .56rem

  &__content
    flex: 1
    padding-bottom: .12rem
    &--bordered
      border-bottom: 1px solid $content-bgColor


    &__title
      line-height: .22rem
      font-size: .16rem
      color: $content-fontColor

    &__tags
      margin-top: .08rem
      line-height: .18rem
      font-size: .13rem
      color: $content-fontColor

    &__tag
      margin-right: .16rem

    &__highlight
      margin: .08rem 0 0 0
      line-height: .18rem
      font-size: .13rem
      color: #E93B3B
</style>
