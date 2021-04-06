<template>
  <div className="wrapper">
    <div class="title">我的订单</div>
    <div class="orderContainer">
      <div class="order" v-for="(item, index) in list" :key="index">
        <div class="order__title">
          {{ item.shopName }}
          <span class="order__title__status">
            {{ item.isCanceled ? "已取消" : "已下单" }}
          </span>
        </div>
        <div class="order__content">
          <div class="order__content__imgContainer">
            <template
              v-for="(innerItem, innerIndex) in item.products"
              :key="innerIndex"
            >
              <img
                v-if="innerIndex <= 3"
                :src="innerItem.product.img"
                alt="order__content__img"
                class="order__content__img"
              />
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">&yen;{{ item.totalPrice }}</div>
            <div class="order__content__count">共{{ item.totalNum }}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="2" />
</template>

<script>
import { reactive, toRefs } from "vue";
import Docker from "@/components/Docker/Docker";
import { getOrderList } from "@/api/summary";

// 处理订单列表逻辑
const useOrderListEffect = () => {
  const data = reactive({
    list: []
  });
  getOrderList().then(resp => {
    if (resp?.errno === 0 && resp?.data?.length) {
      const orderList = resp.data;
      orderList.forEach(order => {
        const products = order.products || [];
        let totalPrice = 0;
        let totalNum = 0;
        products.forEach(productItem => {
          totalNum += productItem.orderSales || 0;
          totalPrice +=
            productItem?.product?.price * productItem?.orderSales || 0;
        });
        order.totalNum = totalNum;
        order.totalPrice = totalPrice;
      });
      data.list = resp.data;
    }
  });
  const { list } = toRefs(data);
  return { list };
};

export default {
  name: "orderList",
  components: { Docker },
  setup() {
    const { list } = useOrderListEffect();
    return { list };
  }
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
