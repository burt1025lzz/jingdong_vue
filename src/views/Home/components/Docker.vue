<template>
  <div className="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="item.icon"
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
    >
      <div className="iconfont" v-html="item.icon" />
      <div className="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { icon: "&#xe607;", text: "首页" },
      { icon: "&#xe6bc;", text: "购物车" },
      { icon: "&#xe616;", text: "订单" },
      { icon: "&#xe681;", text: "我的" }
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
