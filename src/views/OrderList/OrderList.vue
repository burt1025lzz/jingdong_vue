<template>
  <div className="wrapper">
    <div class="title">我的订单</div>
    <div class="orderContainer">
      <div class="order">
        <div class="order__title">
          沃尔玛
          <span class="order__title__status">已取消</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgContainer">
            <img
              src="http://www.dell-lee.com/imgs/vue3/tomato.png"
              alt="order__content__img"
              class="order__content__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/tomato.png"
              alt="order__content__img"
              class="order__content__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/tomato.png"
              alt="order__content__img"
              class="order__content__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/tomato.png"
              alt="order__content__img"
              class="order__content__img"
            />
          </div>
          <div class="order__content__info">
            <div class="order__content__price">&yen;66.69</div>
            <div class="order__content__count">共2件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="2" />
</template>

<script>
import Docker from "@/components/Docker/Docker";

export default {
  name: "orderList",
  components: { Docker }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables.sass"
.wrapper
  overflow-y: auto
  position: absolute
  top: 0
  right: 0
  bottom: .5rem
  left: 0
  background: $bgBoardColor

.title
  line-height: .44rem
  background: $bgColor
  font-size: .16rem
  color: $content-fontColor
  text-align: center

.orderContainer
  .order
    margin: .16rem .18rem
    padding: .16rem
    background: $bgColor

    &__title
      margin-bottom: .16rem
      font-size: .16rem
      line-height: .22rem
      color: $content-fontColor

      &__status
        float: right
        font-size: .14rem
        color: $light-fontColor

    &__content
      display: flex

      &__imgContainer
        flex: 1

      &__img
        width: .4rem
        height: .4rem
        margin-right: .12rem

      &__info
        width: .7rem

      &__price
        font-size: .14rem
        text-align: right
        line-height: .2rem
        color: $highlight-fontColor
        margin-bottom: .04rem

      &__count
        line-height: .14rem
        font-size: .12rem
        color: $content-fontColor
        text-align: right
</style>
