import request from '@api/http'

export default {
  // 是否在提审中
  getPublishStatus(args) {
    const url = `/common/system/system/get-verify-version`
    // const url = `/api/jwt/customer/login`
    return request.get({url, loading: true, toast: false, ...args})
  }
}
