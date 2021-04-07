<template>
  <div className="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="item.icon"
      :class="{
        docker__item: true,
        'docker__item--active': index === currentIndex
      }"
    >
      <router-link :to="item.to">
        <div className="iconfont" v-html="item.icon" />
        <div className="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  props: ["currentIndex"],
  setup() {
    const dockerList = [
      { icon: "&#xe607;", text: "首页", to: { name: "Home" } },
      { icon: "&#xe6bc;", text: "购物车", to: { name: "CartList" } },
      { icon: "&#xe616;", text: "订单", to: { name: "OrderList" } },
      { icon: "&#xe681;", text: "我的", to: { name: "Home" } }
    ];
    return { dockerList };
  }
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

  &__item
    flex: 1
    text-align: center

    a
      color: $content-fontColor

    .iconfont
      margin: .07rem 0 .02rem 0
      font-size: .18rem

    &--active
      a
        color: #1FA4FC

  &__title
    font-size: .2rem
    transform: scale(.5, .5)
    transform-origin: center top
</style>
