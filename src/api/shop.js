import request from '@api/http'

export default {
  /**
   * 校验是否是门店
   * @param data
   * @param loading
   * @returns {*}
   */
  checkShop(args) {
    const url = `/customer/customer/customer/check-shop`
    return request.post({url, ...args})
  }
}
