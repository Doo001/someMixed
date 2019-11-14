/**
 * 1
 * 这里提供所有网络请求的接口
 * 注: 这里整理所有API接口
 */
import axios from "./interceptors";
import Cookies from "js-cookie";

function Axios(obj) {
  return axios({
    ...obj,
    headers: { Authorization: Cookies.get("user-token") || "" }
    // withCredentials: true,
    // crossDomain: process.env.NODE_ENV === "development" // 允许跨域携带cookie
  }).catch(e => {
    // 这里兜住error, 从而不影响后续代码执行，避免出现白屏
    console.log(e, "error catch");
    return {
      message: "请求异常"
    };
  });
}

const prefix = "/api/gw/goods";
const API = {
  getBundleListUrl: () => prefix + "/api/mgt/bundle/searchBundles",
  bundleUpateUrl: () => prefix + "/api/mgt/bundle/update",
  createBundleUrl: () => prefix + "/api/mgt/bundle/create",
  publicBundleUrl: () => prefix + "/api/mgt/bundle/publish",
  retireBundleUrl: () => prefix + "/api/mgt/bundle/retire",
  deleteBundleUrl: () => prefix + "/api/mgt/bundle/delete",
  manage: () => "/manage-vipbclass/user/operation/commodityList ",
  enums: () => prefix + "/api/mgt/common/enums",
  gw: () => "/api/gw/api/v1/tag/all",
  skuList: () => prefix + "/api/mgt/sku/list",
  skuDetail: () => prefix + "/api/mgt/sku/getBySkuId",
  skuCreate: () => prefix + "/api/mgt/sku/create",
  skuEdit: () => prefix + "/api/mgt/sku/update",
  skuDel: () => prefix + "/api/mgt/sku/delete",
  skuOnline: () => prefix + "/api/mgt/sku/publish",
  skuOffline: () => prefix + "/api/mgt/sku/retire",
  skuCourse: () => "/api/gw/api/v1/course/",
  spuList: () => prefix + "/api/mgt/spu/list",
  spuCreate: () => prefix + "/api/mgt/spu/create",
  spuEdit: () => prefix + "/api/mgt/spu/update/",
  spuComplex: id => prefix + `/api/mgt/spu/${id}/complex`, // 获取spu详细信息
  spuDel: () => prefix + "/api/mgt/spu/delete?spuId=",
  spuOnline: () => prefix + "/api/mgt/spu/publish",
  spuOffline: () => prefix + "/api/mgt/spu/retire",
  spuAdd: () => prefix + "/api/mgt/sku/listByIdName"
};
// 获取套装列表
function getBundleList(params) {
  return Axios({
    url: API.getBundleListUrl(),
    method: "post",
    data: params
  });
}
// 更新套装
function updateBundle(params) {
  return Axios({
    url: API.bundleUpateUrl(),
    method: "post",
    data: params
  });
}

// 删除套装
function deleteBundle(id) {
  return Axios({
    url: API.deleteBundleUrl(),
    method: "post",
    params: { id: id }
  });
}
// 创建套装
function createBundle(params) {
  return Axios({
    url: API.createBundleUrl(),
    method: "post",
    data: params
  });
}
// 上架套餐
function publicBundle(params) {
  return Axios({
    url: API.publicBundleUrl(),
    method: "post",
    data: params
  });
}
// 下架套餐
function retireBundle(params) {
  return Axios({
    url: API.retireBundleUrl(),
    method: "post",
    data: params
  });
}

function getEnums(params) {
  return Axios({
    url: API.enums(),
    method: "get",
    data: params
  });
}

function getGw(params) {
  return Axios({
    url: API.gw(),
    method: "get",
    data: params
  });
}

function getSkuList(params) {
  return Axios({
    url: API.skuList(),
    method: "post",
    data: params
  });
}

function getSkuDetail(id) {
  return Axios({
    url: API.skuDetail(),
    method: "get",
    params: { id: id }
  });
}

function skuCreate(params) {
  return Axios({
    url: API.skuCreate(),
    method: "post",
    data: params
  });
}

function skuEdit(params) {
  return Axios({
    url: API.skuEdit(),
    method: "post",
    data: params
  });
}

function skuDel(params) {
  return Axios({
    url: API.skuDel(),
    method: "post",
    data: params
  });
}

function skuOnline(params) {
  return Axios({
    url: API.skuOnline(),
    method: "post",
    data: params
  });
}

function skuOffline(params) {
  return Axios({
    url: API.skuOffline(),
    method: "post",
    data: params
  });
}

function skuCourse(params) {
  return Axios({
    url: `${API.skuCourse()}${params}/complex`,
    method: "get",
    data: params
  });
}

function spuAdd(params) {
  return Axios({
    url: API.spuAdd(),
    method: "post",
    data: params
  });
}

function spuList(params) {
  return Axios({
    url: API.spuList(),
    method: "post",
    data: params
  });
}

function spuCreate(params) {
  return Axios({
    url: API.spuCreate(),
    method: "post",
    data: params
  });
}

function getSpuComplex(id) {
  return Axios({
    url: API.spuComplex(id),
    method: "get",
    params: { withSku: true }
  });
}

function spuEdit(params) {
  let { formId, ...oth } = params;
  return Axios({
    url: `${API.spuEdit()}${formId}`,
    method: "post",
    data: oth
  });
}

function spuDel(params) {
  return Axios({
    url: `${API.spuDel()}${params}`,
    method: "post"
  });
}

function spuOnline(params) {
  return Axios({
    url: API.spuOnline(),
    method: "post",
    data: params
  });
}

function getBundleById(id) {
  return Axios({
    url: API.fetchBundleUrl(),
    method: "get",
    params: id
  });
}

function spuOffline(params) {
  return Axios({
    url: API.spuOffline(),
    method: "post",
    data: params
  });
}

export default {
  getBundleList,
  updateBundle,
  deleteBundle,
  createBundle,
  getBundleById,
  publicBundle,
  retireBundle,
  getEnums, // 枚举
  getGw, // 枚举
  getSkuList, // skutable
  getSkuDetail, // 查询单个sku
  skuCreate, // 创建sku
  skuEdit, // 更新sku
  skuDel, // 删除sku_table
  skuOnline, // 上架 sku
  skuOffline, // 下架 sku
  skuCourse, // 关联课程id sku
  spuList, // sputable
  spuCreate, // 创建spu
  getSpuComplex, // 获取某个SPU详情
  spuEdit, // 更新spu
  spuDel, // 删除spu_table
  spuOnline, // 上架 spu
  spuOffline, // 下架 spu
  spuAdd // spu添加商品
};
