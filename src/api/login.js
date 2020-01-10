import request from '@api/http'

export default {
  /**
   * 登录
   * @param data
   * @param loading
   * @returns {*}
   */
  getToken(args) {
    const url = `/customer/customer/auth/post-login`
    return request.post({url, ...args})
  },
  /**
   * 解析手机号码
   * @param data
   * @param loading
   * @returns {*}
   */
  getWechatMobile(args) {
    const url = `/customer/customer/customer/get-mobile`
    return request.post({url, ...args})
  }
}
