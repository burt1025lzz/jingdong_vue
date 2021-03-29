import request from "@/utils/request";

// 获取登录信息
export function getLogin(data) {
  return request({
    url: "user/login",
    method: "post",
    data
  });
}

// 获取注册信息
export function getRegister(data) {
  return request({
    url: "user/register",
    method: "post",
    data
  });
}

// 获取热门店铺
export function getHotList() {
  return request({
    url: "shop/hot-list",
    method: "get"
  });
}

// 获取商家产品详情
export function getShop(routeId) {
  return request({
    url: `shop/${routeId}`,
    method: "get"
  });
}

// 获取商家产品列表
export function getProducts(routeId, params) {
  return request({
    url: `shop/${routeId}/products`,
    method: "get",
    params
  });
}

// 创建订单
export function getOrder(data) {
  return request({
    url: "order",
    method: "post",
    data
  });
}
