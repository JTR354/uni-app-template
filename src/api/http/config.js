const env = process.env.VUE_APP_$ENV
const version = process.env.VUE_APP_$VERSION || ''

const LOCAL = {
  api: 'http://exchange-platform-api.com/exchange-platform' + version,
  image: 'http://img.com/defaults',
  upload: 'http://exchange-platform-api.com/exchange-platform' + version,
  outLink: 'wss://fresh-h5.jkweixin.net', // 外部h5链接
  websocket: 'wss://wss.com/',
  webview: 'https://fresh-h5.jkweixin.net'
}

const DEV = {
  api: 'https://coupon-center-api.jerryf.cn/coupon-center' + version,
  // image: 'https://img.jerryf.cn/defaults',
  image: 'https://img.jkweixin.net/defaults',
  upload: 'https://exchange-platform-api.jerryf.cn/exchange-platform' + version,
  outLink: 'wss://fresh-h5.jkweixin.net', // 外部h5链接
  websocket: 'wss://wss.jerryf.cn/',
  webview: 'https://fresh-h5.jkweixin.net'
}

const TEST = {
  api: 'https://coupon-center-api.jkweixin.net/coupon-center' + version,
  image: 'https://img.jkweixin.net/defaults',
  upload: 'https://exchange-platform-api.jkweixin.net/exchange-platform' + version,
  outLink: 'https://fresh-h5.jkweixin.net',
  websocket: 'wss://wss.jkweixin.net',
  webview: 'https://fresh-h5.jkweixin.net'
}

const PROD = {
  api: 'https://coupon-center-api.jkweixin.com/coupon-center' + version,
  image: 'https://img.jkweixin.com/defaults',
  upload: 'https://exchange-platform-api.jkweixin.com/exchange-platform' + version,
  outLink: 'https://fresh-h5.jkweixin.com',
  websocket: 'wss://wss.jkweixin.com',
  webview: 'https://fresh-h5.jkweixin.com'
}

// 环境配置请求的api
let baseUrl = LOCAL
switch (env) {
  case 'development':
    baseUrl = DEV
    break
  case 'release':
    baseUrl = TEST
    break
  case 'production':
    baseUrl = PROD
    break
  default:
    break
}
export const baseURL = baseUrl

export const ERR_OK = 0
export const TIME_OUT = 10000
export const ERR_NO = -404
export const TOKEN_OUT = 10000 // token 失效
