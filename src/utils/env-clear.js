import {baseURL} from '@api/http/config'

export function envClear() {
  const env = process.env.VUE_APP_$ENV
  const currentEnv = wx.getStorageSync('env')
  if (env !== currentEnv && currentEnv) {
    wx.clearStorageSync()
    wx.setStorageSync('env', env)
  }
  console.warn('环境：' + env)
  console.warn('参数：', baseURL)
}

envClear()
