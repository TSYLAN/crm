import request from "@/utils/request";

//合同汇总报表
export function getformcontrat(data) {
  return request({
    url: "/serv/contract/summaryReport",
    method: "post",
    data
  });
}
// 合同汇总时间
export function getformbiTimes(data) {
  return request({
    url: "/sys/currency/biTimes",
    method: "get",
    params: { data }
  });
}
// 合同汇总搜索
export function getformsearch(data) {
  return request({
    url: "/serv/contract/search",
    method: "post",
    data
  });
}
// 合同汇总查询信息
export function getformsearchmessage(data) {
    return request({
      url: "/serv/contract/search",
      method: "post",
      data
    });
  }
  //回款计划报表
  export function getformrepayment(data) {
    return request({
      url: "/serv/plan/paymentReport",
      method: "post",
      data
    });
  }
