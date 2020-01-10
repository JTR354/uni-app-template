<script>
  import AppPromise from '@utils/app-promise'
  import API from '@api'
  import HTTP from '@api/http'
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function(options) {
      let shopId = this.$storage('shopId') || ''
      if (options.query.shopId) {
        shopId = options.query.shopId
      }
      this.$storage('shopId', +shopId)
      HTTP.setHeaders({'Current-Shop': shopId})
      AppPromise.getInstance(async (resolve) => {
        console.log('App Show')
        await this.silenceLogin()
        resolve(true)
      })
    },
    onHide: function() {
      console.log('App Hide')
    },
    methods: {
      // 静默
      async silenceLogin() {
        // 初始化获取静默授权
        this.codeMsg = await this.$uniapp.login()
        const res = await API.Login.getToken({
          data: {code: this.codeMsg.code},
          loading: false,
          toast: false,
          doctor() {}
        }).catch((err) => {
          return err
        })
        if (res.error_code !== this.$ERR_OK) {
          this.$storage('userInfo', {})
          this.$storage('distributer', {})
          return
        }
        this.$storage('token', res.data.access_token)
        this.$storage('userInfo', res.data.customer_info)
        this.$storage('distributer', res.data.distributer)
        HTTP.setHeaders({Authorization: res.data.access_token})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*--公共样式--*/
@import "~@style/base.styl"
/*底部tab栏样式修改，仅h5生效*/
uni-tabbar .uni-tabbar__icon
  margin-bottom: 4.5px
uni-tabbar .uni-tabbar__label
  line-height: 1
</style>
