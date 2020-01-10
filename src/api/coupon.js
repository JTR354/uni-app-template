import request from '@api/http'
const coupon = ''
export default {
  // 卡片信息
  getCardInfo(args) {
    const url = `${coupon}/customer/money/entry-manage/statistic`
    return request.get({url, ...args})
  },
  // 账户余额
  getAccount(args) {
    const url = `${coupon}/customer/money/account/show`
    return request.get({url, ...args})
  },
  // 佣金记录
  commissionLogs(args) {
    const url = `${coupon}/customer/money/entry-manage/index`
    return request.get({url, ...args})
  },
  // 提现记录
  billLogs(args) {
    const url = `${coupon}/customer/money/bill/index`
    return request.get({url, ...args})
  },
  // 银行卡详情
  bankInfo(args) {
    const url = `${coupon}/customer/money/bank-card/show`
    return request.get({url, ...args})
  },
  // 银行卡列表
  bankList(args) {
    const url = `${coupon}/customer/money/bank/index`
    return request.get({url, ...args, loading: false})
  },
  // 银行卡列表
  bankUpdate(id, args) {
    const url = id ? `${coupon}/customer/money/bank-card/update` : `${coupon}/customer/money/bank-card/create`
    return request[id ? 'put' : 'post']({url, ...args})
  },
  // 申请提现
  toBill(args) {
    const url = `${coupon}/customer/money/withdrawal/apply-withdrawal`
    return request.post({url, ...args})
  }
}
