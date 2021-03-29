<template>
  <div class="order">
    <div class="order__price">
      实付金额
      <span>&yen;{{ calculations.price }}</span>
    </div>
    <div class="order__btn">提交订单</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "@/common/cartEffect";

export default {
  name: "Order",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { calculations } = useCommonCartEffect(shopId);
    return { calculations };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
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
