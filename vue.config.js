var path = require('path')
var webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function resolveArgvs() {
  var args = process.argv.slice(2)
  var plugin = {
    wx: 'global.uni'
  }
  args.forEach((item) => {
    if (/^--(.){0,}=/.test(item)) {
      var _tmp = item.split('=')
      if (_tmp[1]) {
        var key = 'process.env.VUE_APP_$' + _tmp[0].replace('--', '').toUpperCase()
        plugin[key] = JSON.stringify(_tmp[1])
      }
    }
  })
  return [plugin]
}

var [plugin] = resolveArgvs()
// hack for flyio
if (process.env.UNI_PLATFORM === 'mp-weixin') {
  delete plugin.wx
}
if (/(h5|app-plus)/.test(process.env.UNI_PLATFORM)) {
  plugin.wx = 'window.uni'
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: ['~@/design/index.styl']
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@src': resolve('src'),
        '@api': resolve('src/api'),
        '@static': resolve('src/static'),
        '@style': resolve('src/design/'),
        '@state': resolve('src/state'),
        '@mixins': resolve('src/mixins'),
        '@pages': resolve('src/pages'),
        '@utils': resolve('src/utils'),
        '@components': resolve('src/components'),
        '@flyio': 'flyio/dist/npm/wx'
      }
    },
    plugins: [new webpack.DefinePlugin(plugin)]
  }
}
