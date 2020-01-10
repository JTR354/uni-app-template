import HTTP from './index'
import {baseURL, ERR_OK, TIME_OUT} from './config'
import {showLoading, hideLoading, showToast} from '@utils/uni-app'
import {$platform} from '@utils/constant'
import storage from '@utils/storage'
// import _routes from '@utils/routes'
const ERR_KEY = 'error_code'

const COMMON_HEADER = {
  Authorization: storage('token'),
  'Mini-Program': $platform[process.env.VUE_APP_PLATFORM],
  // 'Release-Version': process.env.$V,
}

HTTP.init((http) => {
  http.config.timeout = TIME_OUT
  http.config.headers = COMMON_HEADER
  http.config.baseURL = baseURL.api
})

HTTP.setCallback({
  // 请求前处理
  beforeRequest({loading = true}, context) {
    if (loading) {
      context.queue.length === 0 && showLoading()
      context.queue.push(1)
    }
  },
  // 请求拦截
  willRequest(request) {
    return request
  },
  // 响应拦截
  willResponse(response) {
    return response
  },
  // 请求完成后的逻辑处理
  responseFulfilled(res, {url, loading = true, toast = true}, context) {
    // 可自定义处理loading
    if (loading) {
      context.queue.pop()
      context.queue.length === 0 && hideLoading()
    }
    if (res[ERR_KEY] !== ERR_OK) {
      errorCodeHandle(res[ERR_KEY], url)
    }
    // 可自定义处理toast错误
    if (res[ERR_KEY] !== ERR_OK && toast) {
      showToast(res.message)
    }
    // 处理错误函数
    if (res[ERR_KEY] !== ERR_OK) {
      console.error(url + ' <<<<<<接口异常>>>>> ' + JSON.stringify(res))
      throw res
    }
    return res
  }
})
/**
 * 错误码处理
 * @param code
 */
function errorCodeHandle(code, url) {
  switch (code) {
    case 10000:
      break
    case 2010104: // 商品不存在或已下架
    case 3100105: // 店铺不存在或被冻结
      break
    default:
      break
  }
}
