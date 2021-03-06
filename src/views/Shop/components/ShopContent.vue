<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': currentTab === item.tab
        }"
        v-for="item in categories"
        :key="item.tab"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img
          :src="item.imgUrl"
          alt="product__item__img"
          class="product__item__img"
        />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus iconfont"
            @click="
              () => {
                changeCartItem(shopId, item._id, item, -1, shopName);
              }
            "
            >&#xe90a;</span
          >
          {{ getProductCartCount(shopId, item._id) }}
          <span
            class="product__number__plus iconfont"
            @click="
              () => {
                changeCartItem(shopId, item._id, item, 1, shopName);
              }
            "
            >&#xe61a;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { getProducts } from "@/api/summary";
import { useCommonCartEffect } from "@/common/cartEffect";

const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" }
];

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = tab => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};

// 列表相关逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] });
  const getContentData = () => {
    getProducts(shopId, {
      tab: currentTab.value
    }).then(resp => {
      resp?.errno === 0 && resp?.data.length && (content.list = resp.data);
    });
  };
  watchEffect(() => {
    getContentData();
  });
  const { list } = toRefs(content);
  return { list };
};

const useCartEffect = () => {
  const store = useStore();
  const { cartList, changeCartItemInfo } = useCommonCartEffect();
  const changeShopName = (shopId, shopName) => {
    store.commit("changeShopName", { shopId, shopName });
  };

  const changeCartItem = (shopId, productId, item, number, shopName) => {
    changeCartItemInfo(shopId, productId, item, number);
    changeShopName(shopId, shopName);
  };

  const getProductCartCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0;
  };

  return { cartList, changeCartItem, getProductCartCount };
};

export default {
  name: "ShopContent",
  props: ["shopName"],
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab, shopId);
    const { cartList, changeCartItem, getProductCartCount } = useCartEffect();

    return {
      list,
      categories,
      currentTab,
      shopId,
      cartList,
      handleTabClick,
      changeCartItem,
      getProductCartCount
    };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
@import "~@/style/mixins"

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
    background: $search-bgColor
    height: 100%

    &__item
      line-height: .4rem
      text-align: center
      font-size: .14rem
      color: $content-fontColor

      &--active
        background: $bgColor

  .product
    overflow-y: scroll
    flex: 1

    &__item
      position: relative
      display: flex
      padding: .12rem 0
      margin: 0 .16rem
      border-bottom: .01rem solid $content-bgColor

      &__detail
        overflow: hidden

      &__img
        width: .68rem
        height: .68rem
        margin-right: .16rem

      &__title
        line-height: .2rem
        font-size: .14rem
        color: $content-fontColor
        margin: 0
        @include ellipsis

      &__sales
        margin: .1rem 0 .03rem 0
        height: .16rem
        font-size: .12rem
        color: $content-fontColor

      &__price
        line-height: .2rem
        font-size: .14rem
        color: $highlight-fontColor
        margin: 0

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
      bottom: .12rem
      line-height: .18rem

      &__minus
        color: $medium-fontColor
        margin-right: .05rem

      &__plus
        color: $btn-bgColor
        margin-left: .05rem
</style>
