import request from '@api/http'

export default {
  /**
   * 淘宝商品列表
   * @param data
   * @param loading
   * @returns {*}
   */
  getTbGoodsList(args) {
    const url = `/customer/goods/goods/choice`
    return request.get({url, ...args})
  },
  /**
   * 拼多多商品列表
   * @param data
   * @param loading
   * @returns {*}
   */
  getPddGoodsList(args) {
    const url = `/customer/goods/goods/pdd-explosion`
    return request.get({url, ...args})
  },
  /**
   * 商品详情
   * @param data
   * @param loading
   * @returns {*}
   */
  getGoodsDetail(args) {
    const url = `/customer/goods/goods/show`
    return request.get({url, ...args})
  },
  /**
   * 写入领券地址
   * @param data
   * @param loading
   * @returns {*}
   */
  setTbURL(args) {
    const url = `/customer/goods/goods/save-share-url`
    return request.get({url, ...args})
  },
  /**
   * 获取淘口令
   * @param data
   * @param loading
   * @returns {*}
   */
  getTbCode(args) {
    const url = `/customer/goods/tpwd/taobao-create`
    return request.post({url, ...args})
  }
}
