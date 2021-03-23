import { useStore } from "vuex";

export const useCommonCartEffect = () => {
  const store = useStore();
  const changeCartItemInfo = (shopId, productId, productInfo, number) => {
    store.commit("changeCartItemInfo", {
      shopId,
      productId,
      productInfo,
      number
    });
  };
  return { changeCartItemInfo };
};
