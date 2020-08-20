import request from "@/utils/request";

//产品报表
export function getproductList(data) {
  return request({
    url: "/productList/pageInfoPrimaryList",
    method: "post",
    data
  });
}
; 
//产品增加
export function getproductadd(data) {
  return request({
    url: "/productList/insertPrimaryList",
    method: "post",
    data
  });
}
