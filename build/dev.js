var concurrently = require('concurrently')
var {platformList, env, apiVer, extend, makeCommands} = require('./base')

concurrently(makeCommands('development'))
// cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch
// cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build
