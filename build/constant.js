/**
 * 运行平台
 * @type {{tt: string, wx: string, bd: string}}
 */
var $platform = {
  wx: 'mp-weixin',
  tt: 'mp-toutiao',
  bd: 'mp-baidu'
  // 'h5': 'h5',
  // 'qq': 'mp-qq',
  // 'tb': 'mp-alipay',
  // 'h+': 'app-plus'
}
/**
 * env环境
 * @type {{prod: string, dev: string, test: string}}
 */
var $nodeEnv = {
  dev: 'development',
  test: 'release',
  prod: 'production'
}
/**
 * api版本
 */
var $apiVersion = creatVersion(6)
function creatVersion(limit = 1) {
  var obj = {}
  new Array(limit).fill(1).map((val, index) => {
    obj[`v${index + 1}`] = `/v${index + 1}`
  })
  return obj
}

module.exports = {
  $platform,
  $nodeEnv,
  $apiVersion
}
