<template>
  <div class="mask" v-if="showCart && calculations.total" @click="mark" />
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <span
            class="product__header__icon iconfont"
            :style="
              calculations.allChecked
                ? { color: '#0091FF' }
                : { color: '#909399' }
            "
            >&#xe652;</span
          >
          全选
        </div>
        <div class="product__header__clear">
          <span @click="() => cleanCartProducts(shopId)">清空购物车</span>
        </div>
      </div>
      <template v-for="item in productsList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item__checked iconfont"
            :style="item.check ? { color: '#0091FF' } : { color: '#909399' }"
            @click="() => changeCartItemChecked(shopId, item._id)"
          >
            &#xe652;
          </div>
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
      <div class="check__icon" @click="handleCartShowChange">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          alt="check__icon__img"
        />
        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>
      <div class="check__info">
        总计:
        <span class="check__info__price">&yen; {{ calculations.price }}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{ path: `/orderConfirmation/${shopId}` }">
          去结算
        </router-link>
      </div>
    </div>
  </div>
  <Toast v-if="show" :message="toastMessage" />
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useCommonCartEffect } from "@/common/cartEffect";
import Toast, { useToastEffect } from "@/components/Toast/Toast";

// 获取购物车信息逻辑
const useCartEffect = showCart => {
  const store = useStore();
  const route = useRoute();
  const shopId = route.params.id;
  const { cartList, productsList, changeCartItemInfo } = useCommonCartEffect(
    shopId
  );

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList;
    const result = { total: 0, price: 0, allChecked: true };

    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        result.total += product.count;
        product.check && (result.price += product.count * product.price);
        product.count > 0 && !product.check && (result.allChecked = false);
      }
    }
    result.price = result.price.toFixed(2);

    localStorage.cartTotal = result.total;
    result.total === 0 && (showCart.value = false);

    return result;
  });

  const changeCartItemChecked = (shopId, productId) => {
    store.commit("changeCartItemChecked", { shopId, productId });
  };

  const cleanCartProducts = shopId => {
    store.commit("cleanCartProducts", { shopId });
    showCart.value = false;
  };

  const setCartItemsChecked = shopId => {
    store.commit("setCartItemsChecked", { shopId });
  };

  return {
    calculations,
    productsList,
    shopId,
    changeCartItemInfo,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemsChecked
  };
};

const toggleCartEffect = showToast => {
  const showCart = ref(false);
  const handleCartShowChange = () => {
    if (localStorage.cartTotal <= 0) {
      showToast("请先添加商品!");
      return false;
    }
    showCart.value = !showCart.value;
  };
  const mark = () => {
    showCart.value = false;
  };
  return { showCart, mark, handleCartShowChange };
};

export default {
  name: "Cart",
  components: { Toast },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();

    const { showCart, mark, handleCartShowChange } = toggleCartEffect(
      showToast
    );

    const {
      calculations,
      productsList,
      shopId,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked
    } = useCartEffect(showCart);

    return {
      calculations,
      productsList,
      shopId,
      showCart,
      show,
      toastMessage,
      showToast,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      mark,
      handleCartShowChange
    };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
@import "~@/style/mixins"
.mask
  position: fixed
  left: 0
  right: 0
  bottom: 0
  top: 0
  background: rgba(0, 0, 0, .5)
  z-index: 1

.cart
  position: absolute
  left: 0
  right: 0
  bottom: 0
  z-index: 2
  background: $bgColor

  .product
    overflow-y: scroll
    flex: 1
    background-color: $bgColor

    &__header
      display: flex
      line-height: .52rem
      font-size: .14rem
      color: $content-fontColor
      border-bottom: .01rem solid $content-bgColor

      &__all
        width: .64rem
        margin-left: .18rem

      &__icon
        vertical-align: top
        line-height: .52rem
        font-size: .2rem
        margin-right: .1rem

      &__clear
        flex: 1
        text-align: right
        margin-right: .16rem

        span
          display: inline-block


    &__item
      position: relative
      display: flex
      padding: .12rem 0
      margin: 0 .16rem
      border-bottom: .01rem solid $content-bgColor

      &__checked
        font-size: .2rem
        line-height: .5rem
        margin-right: .2rem

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
      bottom: .26rem

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

      a
        color: $bgColor
</style>
