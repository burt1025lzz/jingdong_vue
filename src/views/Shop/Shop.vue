<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe625;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe60b;</span>
        <label>
          <input class="search__content__input" placeholder="请输入商品名称" />
        </label>
      </div>
    </div>
    <ShopInfo v-show="item.imgUrl" :item="item" :hide-border="false" />
  </div>
  <ShopContent />
  <Cart />
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getShop } from "@/api/summary";
import ShopInfo from "@/components/ShopInfo/ShopInfo";
import ShopContent from "@/views/Shop/components/ShopContent";
import Cart from "@/views/Shop/components/Cart";

const useShopInfoEffect = () => {
  const route = useRoute();

  const data = reactive({
    item: {}
  });
  const getItemData = () => {
    getShop(route.params.id).then(resp => {
      if (resp?.errno === 0 && resp?.data) {
        data.item = resp.data;
      }
    });
  };
  const { item } = toRefs(data);
  return { item, getItemData };
};

const useBackRouterEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return { handleBackClick };
};

export default {
  name: "Shop",
  components: { ShopInfo, ShopContent, Cart },
  setup() {
    const { item, getItemData } = useShopInfoEffect();
    const { handleBackClick } = useBackRouterEffect();

    getItemData();
    return { item, handleBackClick };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.wrapper
  padding: 0 .18rem

  .search
    display: flex
    margin: .14rem 0 .04rem 0
    line-height: .32rem

    &__back
      font-size: .24rem
      width: .3rem
      color: #B6B6B6

    &__content
      display: flex
      flex: 1
      background: $search-bgColor
      border-radius: .16rem

      label
        width: 100%

      &__icon
        width: .44rem
        text-align: center
        color: $search-fontColor

      &__input
        display: block
        width: 93%
        height: .32rem
        border: none
        outline: none
        background: none
        color: $content-fontColor
        font-size: .14rem

        &::placeholder
          color: $content-fontColor
</style>
