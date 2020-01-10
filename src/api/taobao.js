import request from '@api/http'

export default {
  // 查询私域授权结果
  checkIsAuth(args) {
    const url = `coupon:/customer/distributer/private-domain/get-relation-bind`
    return request.get({url, ...args})
  },
  // 获取私域授权信息
  getCode(args) {
    const url = `coupon:/customer/distributer/private-domain/get-relation-url`
    return request.get({url, ...args})
  }
}
