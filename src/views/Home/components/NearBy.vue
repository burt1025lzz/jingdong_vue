<template>
  <div className="nearby">
    <h3 className="nearby__title">附近店铺</h3>
    <div v-for="item in nearbyList" :key="item._id" className="nearby__item">
      <img
        className="nearby__item__img"
        alt="nearby__item__img"
        :src="item.imgUrl"
      />
      <div className="nearby__content">
        <div className="nearby__content__title">{{ item.name }}</div>
        <div className="nearby__content__tags">
          <span className="nearby__content__tag">月售: {{ item.sales }}</span>
          <span className="nearby__content__tag"
            >起送: {{ item.expressLimit }}</span
          >
          <span className="nearby__content__tag"
            >基础运费: {{ item.expressPrice }}</span
          >
        </div>
        <p className="nearby__content__highlight">{{ item.slogan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "@/utils/request";

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = () => {
    get("/api/shop/hot-list").then(resp => {
      if (resp?.errno === 0 && resp?.data?.length) {
        nearbyList.value = resp.data;
      }
    });
  };
  return { nearbyList, getNearbyList };
};

export default {
  name: "NearBy",
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return { nearbyList };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.nearby
  &__title
    margin: .16rem 0 .02rem 0
    font-size: .18rem
    font-weight: normal
    color: $content-fontColor

  &__item
    display: flex
    padding-top: .12rem

    &__img
      margin-right: .16rem
      width: .56rem
      height: .56rem

  &__content
    flex: 1
    padding-bottom: .12rem
    border-bottom: 1px solid $content-bgColor


    &__title
      line-height: .22rem
      font-size: .16rem
      color: $content-fontColor

    &__tags
      margin-top: .08rem
      line-height: .18rem
      font-size: .13rem
      color: $content-fontColor

    &__tag
      margin-right: .16rem

    &__highlight
      margin: .08rem 0 0 0
      line-height: .18rem
      font-size: .13rem
      color: #E93B3B
</style>
