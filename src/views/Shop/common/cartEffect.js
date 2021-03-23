import { useStore } from "vuex";
import { toRefs } from "vue";

export const useCommonCartEffect = () => {
  const store = useStore();
  const { cartList } = toRefs(store.state);
  const changeCartItemInfo = (shopId, productId, productInfo, number) => {
    store.commit("changeCartItemInfo", {
      shopId,
      productId,
      productInfo,
      number
    });
  };
  return { cartList, changeCartItemInfo };
};
