<template>
  <div class="order">
    <div class="order__price">
      实付金额
      <span>&yen;{{ calculations.price }}</span>
    </div>
    <div class="order__btn" @click="() => handleShowConfirmChange(true)">
      提交订单
    </div>
  </div>
  <div
    class="mask"
    @click="() => handleShowConfirmChange(false)"
    v-show="showConfirm"
  >
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btnContainer">
        <div class="mask__content__btn" @click="() => handleConfirmOrder(true)">
          取消订单
        </div>
        <div
          class="mask__content__btn"
          @click="() => handleConfirmOrder(false)"
        >
          确认支付
        </div>
      </div>
    </div>
  </div>
  <Toast v-if="show" :message="toastMessage" />
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import { useCommonCartEffect } from "@/common/cartEffect";
import Toast, { useToastEffect } from "@/components/Toast/Toast";
import { getOrder } from "@/api/summary";

// 下单相关逻辑
const useMakeOrderEffect = (productsList, shopId, shopName, showToast) => {
  const router = useRouter();
  const store = useStore();
  const handleConfirmOrder = isCancel => {
    const products = [];
    for (let i in productsList.value) {
      const product = productsList.value[i];
      products.push({
        id: parseInt(product._id, 10),
        num: product.count
      });
    }
    getOrder({
      addressId: 1,
      shopId,
      shopName: shopName.value,
      isCancel,
      products
    })
      .then(resp => {
        if (resp?.errno === 0) {
          router.push({ name: "OrderList" });
          store.commit("clearCartData", shopId);
        }
      })
      .catch(() => {
        showToast("请求失败");
      });
  };
  return { handleConfirmOrder };
};

// 蒙层显示与否
const useShowMaskEffect = () => {
  const showConfirm = ref(false);
  const handleShowConfirmChange = status => {
    showConfirm.value = status;
  };
  return { showConfirm, handleShowConfirmChange };
};

export default {
  name: "Order",
  components: { Toast },
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { shopName, productsList, calculations } = useCommonCartEffect(
      shopId
    );
    const { handleConfirmOrder } = useMakeOrderEffect(
      productsList,
      shopId,
      shopName,
      showToast
    );
    const { show, toastMessage, showToast } = useToastEffect();
    const { showConfirm, handleShowConfirmChange } = useShowMaskEffect();
    return {
      calculations,
      show,
      toastMessage,
      showToast,
      showConfirm,
      handleShowConfirmChange,
      handleConfirmOrder
    };
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

.mask
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: rgba(0, 0, 0, .5)
  z-index: 1

  &__content
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 3rem
    height: 1.56rem
    border-radius: .04rem
    text-align: center
    background: $bgColor

    &__title
      font-size: .18rem
      margin: .24rem 0 0 0
      line-height: .26rem
      color: $content-fontColor
      font-weight: normal

    &__desc
      margin: .08rem 0 0 0
      font-size: .14rem
      color: $medium-fontColor

    &__btnContainer
      display: flex
      margin: .24rem .58rem

    &__btn
      flex: 1
      width: .8rem
      line-height: .32rem
      border-radius: .16rem
      font-size: .14rem

      &:first-child
        margin-right: .12rem
        border: .01rem solid $submit-bgColor
        color: $submit-bgColor

      &:last-child
        margin-left: .12rem
        background: $submit-bgColor
        color: $bgColor
</style>
