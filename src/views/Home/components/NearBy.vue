<template>
  <div className="nearby">
    <h3 className="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :to="`/shop/${item._id}`"
      :key="item._id"
    >
      <ShopInfo :item="item" :hide-border="true" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import ShopInfo from "@/components/ShopInfo/ShopInfo";
import { getHotList } from "@/api/summary";

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = () => {
    getHotList().then(resp => {
      resp?.errno === 0 && resp?.data?.length && (nearbyList.value = resp.data);
    });
  };
  return { nearbyList, getNearbyList };
};

export default {
  name: "NearBy",
  components: { ShopInfo },
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
</style>
