import request from "@/utils/request";

// 获取登录信息
export function getLogin(data) {
  return request({
    url: "/api/user/login",
    method: "post",
    data
  });
}

// 获取注册信息
export function getRegister(data) {
  return request({
    url: "/api/user/register",
    method: "post",
    data
  });
}

// 获取热门店铺
export function getHotList() {
  return request({
    url: "/api/shop/hot-list",
    method: "get"
  });
}

// 获取商家产品详情
export function getShop(routeId) {
  return request({
    url: `/api/shop/${routeId}`,
    method: "get"
  });
}

// 获取商家产品列表
export function getProducts(routeId, params) {
  return request({
    url: `/api/shop/${routeId}/products`,
    method: "get",
    params
  });
}
