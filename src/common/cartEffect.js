import { useStore } from "vuex";
import { toRefs } from "@vue/reactivity";
import { computed } from "vue";

export const useCommonCartEffect = (shopId, showCart) => {
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

  return { cartList, calculations, productsList, shopName, changeCartItemInfo };
};
