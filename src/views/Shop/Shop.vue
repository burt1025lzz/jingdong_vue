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
    <ShopInfo :item="item" :hide-border="false" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import ShopInfo from "@/components/ShopInfo/ShopInfo";

export default {
  name: "Shop",
  components: { ShopInfo },
  setup() {
    const router = useRouter();
    const item = {
      _id: "1",
      name: "沃尔玛",
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "VIP尊享满89元减4元运费券"
    };
    const handleBackClick = () => {
      router.back();
    };
    return { item, handleBackClick };
  }
};
</script>

<style lang="sass" scoped>
.wrapper
  padding: 0 .18rem

  .search
    display: flex
    margin: .2rem 0 .16rem 0
    line-height: .32rem

    &__back
      font-size: .24rem
      width: .3rem
      color: #B6B6B6

    &__content
      display: flex
      flex: 1
      background: #F5F5F5
      border-radius: .16rem

      label
        width: 100%

      &__icon
        width: .44rem
        text-align: center
        color: #B7B7B7

      &__input
        display: block
        width: 93%
        height: .32rem
        border: none
        outline: none
        background: none
        color: #333
        font-size: .14rem

        &::placeholder
          color: #333
</style>
