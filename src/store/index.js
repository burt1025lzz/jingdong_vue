import { createStore } from "vuex";

const setLocalCartList = state => {
  const { cartList } = state;
  localStorage.cartList = JSON.stringify(cartList);
};

const getLocalCartList = () => {
  return (localStorage.cartList && JSON.parse(localStorage.cartList)) || {};
  /*
     // 第一层级是商铺ID
     shopId: {
       // 第二层级是商品详情
       shopName: "",
       productList: {
         // 第三层级是商品ID
         productId: {
           // 第三层内容是商品内容及购买数量
           _id: 0,
           name: "",
           imgUrl: "",
           sales: 0,
           price: 0,
           oldPrice: 0,
           count: 0
         }
       }
     }
     */
};

export default createStore({
  state: {
    cartList: getLocalCartList()
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, number } = payload;
      let shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {}
      };
      let product = shopInfo.productList[productId];
      if (!product) {
        productInfo.count = 0;
        product = productInfo;
      }
      product.count += number;
      number > 0 && (product.check = true);
      product.count < 0 && (product.count = 0);
      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {}
      };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;
      setLocalCartList(state);
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
      setLocalCartList(state);
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId].productList;
      if (products) {
        for (let i in products) {
          const product = products[i];
          product.check = true;
        }
      }
      setLocalCartList(state);
    }
  },
  actions: {},
  modules: {}
});
