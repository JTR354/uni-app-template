<template>
  <div class="missing">
    <img src="./pic-nothing@2x.png" alt="" class="icon">
    <p class="title">抱歉! 您访问的页面失联啦-</p>
    <div class="button" @click="backHome">返回首页</div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  import HTTP from '@api/http'

  const PAGE_NAME = 'MISSING'

  export default {
    name: PAGE_NAME,
    data() {
      return {
      }
    },
    computed: {
      // ...Helpers.missingComputed,
    },
    onLoad(options) {
      this._code = options.code
    },
    methods: {
      // ...Helpers.missingMethods,
      backHome() {
        let url = this.$routes.mainHome
        if (+this._code === 3100105) {
          url = this.$routes.mainOfficialHome
          HTTP.setHeaders({Authorization: ''})
          uni.clearStorageSync()
        }
        uni.redirectTo({ url })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  .missing
    height: 100vh
    background :#ffffff
    display :flex
    flex-direction :column
    align-items :center

  .icon
    padding-top :162.5px
    width: 100px
    height: 82px

  .title
    font-size: 14px
    color: #808080;
    text-align: center
    padding :19.5px 0

  .button
    width: 100px
    height: 28px
    border-radius: @height
    border: 1px solid #ED2B2B
    font-family: PingFangSC-Regular
    font-size: 14px
    color: #ED2B2B
    line-height: @height
    text-align :center
</style>