import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/sys/user/logout',
    method: 'get'
  })
}
//用户角色列表
export function getpermsList(data) {
  return request({
    url: '/sys/perms/selfList',
    method: 'get',
    params:{data}
  })
}
