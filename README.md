# {{ project }}

> {{ description }}


## 依赖安装
```
npm install
```

## 默认配置文档
See [Configuration Reference](https://cli.vuejs.org/config/).

## 自定义CLI规则说明
### dev 本地调试
```bash
npm run start 输出文件夹 dist/dev
```
### build 打包压缩
```bash
npm run build 输出文件夹 dist/build
```

### 概述
> npm run build|dev 平台 环境 版本 其他  
> 参数顺序任意, 如下
```bash
npm run start wx tt v1 test
// 本地运行 微信 字节跳动 v1版本 test环境
```
### 参数说明详情（build/constant.js）

- 打包平台（process.env.VUE_APP_PLATFORM）

```bash
// 各平台的别名
var $platform = {
  'wx': 'mp-weixin',
  'tt': 'mp-toutiao',
  'bd': 'mp-baidu',
  // 'h5': 'h5',
  // 'qq': 'mp-qq',
  // 'tb': 'mp-alipay',
  // 'h+': 'app-plus'
}
```
```bash
// 示例:
npm run build|dev wx 打包wx
注意: 
  不输入则打包配置文件中所有的平台,如
npm run build 打包各大平台小程序或web应用  
```
- 环境（process.env.VUE_APP_$ENV）

```bash
// 各环境的别名
var $nodeEnv = {
  'dev': 'development',
  'test': 'release',
  'prod': 'production'
}
```
```bash
// 示例:
npm run build|dev test 打包测试环境
注意: 
  不输入则默认打包研发环境
  在应用中可获取  
  process.env.VUE_APP_$ENV = release
```
- 版本（process.env.VUE_APP_$VERSION）

```bash
// 各版本号的别名
var $apiVersion = {
  'dev': 'development',
  'test': 'release',
  'prod': 'production'
}
```
```bash
// 示例:
npm run build|dev v1 打包v1版本
注意: 
  在应用中可获取  
  process.env.VUE_APP_$VERSION
```

- 拓展配置文件：build/extends.js

```bash
// 可拓展的参数
extends = {
  demo: 'demo-demo'
}
```
```bash
// 示例:
npm run build|dev
注意: 
  key值为VUE_APP_$<全大写的extends对象的key值>
  在应用中可获取
  process.env.VUE_APP_$DEMO = 'demo-demo'
```

- 自定命令行

```bash
 npm run start|build hello=world todo=list

 注意: 
   key值为VUE_APP_$<全大写hello|todo的key值>
   在应用中可获取
   process.env.VUE_APP_$HELLO = 'world'
   process.env.VUE_APP_$TODO = 'list'
 
```

- 其他注意事项
> 非系统默认变量统一为process.env.VUE_APP_$<变量名>  
> 系统默认没有$；如下：
```bash
process.env.VUE_APP_PLATFORM // 对应的平台变量
```

## hygen自动化文件创建
- npm run new page 创建页面
> 主包在pages/main/xxx  
分包在 pages/package-xxx<分包名>/xxx
- npm run new package 创建分包
> 创建分包并创建对应的页面

- 注意点:
> src/pages.json 中 __xxxxxxx__ 不要删除  
> 创建提一个分包的时候，src/pages.json需要手动删除多余的逗号  
> 在src/utils/routes.js 中会自动创建路由对象，页面引用如下：
```js
 uni.navigateTo({url: this.$routes.usersMine})
 // 在vue实例下挂载$path对象

```
```bash
// 路由规则如下：
/**
 * key<包名+文件名>: value<路径>
 * 主包：main开头
 * 分包：<分包名>开头
 */
export default {
  usersMine: `/pages/package-users/mine/mine`,
  mainHome: `/pages/main/home/home`,
}
```

- npm run new api
> 创建api文件src/api/xxx

- npm run new module
> 创建vuex模块文件src/state/modules/xxx

- npm run new component
> 创建组件文件src/components/xxx