var chalk = require('chalk')

var {$platform, $nodeEnv, $apiVersion} = require('./constant')
var $extends = require('./extends')
var args = process.argv.slice(2)

var commands = []
var env = Object.values($nodeEnv)[0]
var apiVer = ''
var platformList = []
var extend = ''

// 获取命令行参数
args.forEach((key) => {
  var flag
  if ($nodeEnv[key]) {
    env = $nodeEnv[key]
    flag = true
  }
  if ($apiVersion[key]) {
    apiVer = $apiVersion[key]
    flag = true
  }
  if ($platform[key]) {
    platformList.push($platform[key])
    flag = true
  }
  if (!flag) {
    extend += ` --${key} `
    flag = null
  }
})
// 未输入平台则全部打包
if (!platformList.length) {
  platformList = Object.values($platform)
}
// 拓展命令
for (let [key, value] of Object.entries($extends)) {
  extend += ` --${key}=${value}`
}
/**
 * 创建命令行
 * @returns {string[]}
 */
function makeCommands(buildType) {
  return platformList.map((platform) => {
    log(platform, buildType)
    return `cross-env NODE_ENV=${buildType} UNI_PLATFORM=${platform} vue-cli-service uni-build --env=${env} --version=${apiVer} ${extend} ${
      buildType === 'production' ? '' : '--watch'
    }`
  })
}

function log(platform, buildType) {
  console.log(
    chalk.green(
      `
      ${buildType === 'production' ? 'building...' : 'dev...'}
      platform=${platform}
      env=${env}
      version=${apiVer}
      extends=${JSON.stringify(extend)}
    `
    )
  )
}
module.exports = {
  platformList,
  env,
  apiVer,
  extend,
  makeCommands
}

// cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch
// cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build
