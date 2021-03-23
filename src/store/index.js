import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: {
      /*
      // 第一层级是商铺ID
      shopId: {
        // 第二层级是商品ID
        productId: {
          // 第二层内容是商品内容及购买数量
          _id: 1,
          name: "番茄 250g / 份",
          imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
          sales: 10,
          price: 33.6,
          oldPrice: 39.6,
          count: 2
        }
      }
      */
    }
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, number } = payload;
      let shopInfo = state.cartList[shopId] || {};
      let product = shopInfo[productId];
      if (!product) {
        productInfo.count = 0;
        product = productInfo;
      }
      product.count += number;
      number > 0 && (product.check = true);
      product.count < 0 && (product.count = 0);
      shopInfo[productId] = product;
      state.cartList[shopId] = shopInfo;
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId][productId];
      product.check = !product.check;
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId] = {};
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId];
      if (products) {
        for (let i in products) {
          const product = products[i];
          product.check = true;
        }
      }
    }
  },
  actions: {},
  modules: {}
});
