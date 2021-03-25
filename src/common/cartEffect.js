import { useStore } from "vuex";
import { toRefs } from "@vue/reactivity";
import { computed } from "vue";

export const useCommonCartEffect = shopId => {
  const store = useStore();
  const cartList = toRefs(store.state).cartList.value;
  const changeCartItemInfo = (shopId, productId, productInfo, number) => {
    store.commit("changeCartItemInfo", {
      shopId,
      productId,
      productInfo,
      number
    });
  };

  const productsList = computed(() => {
    return cartList[shopId]?.productList || [];
  });

  const shopName = computed(() => {
    return cartList[shopId]?.shopName || "";
  });

  return { cartList, productsList, shopName, changeCartItemInfo };
};
