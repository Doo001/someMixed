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
  getBundleListUrl: () => prefix + "/api/mgt/xxxx",
  bundleUpateUrl: () => prefix + "/api/mgt/xxxxx",
  createBundleUrl: () => prefix + "/api/mgt/xxxxxxx",
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

function spuAdd(params) {
  return Axios({
    url: API.spuAdd(),
    method: "post",
    data: params
  });
}

export default {
  publicBundle,
  retireBundle,
  getEnums, // 枚举
  getGw, // 枚举
};
