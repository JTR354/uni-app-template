<script>
  import AppPromise from '@utils/app-promise'
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function(options) {
      AppPromise.getInstance(async (resolve) => {
        console.log('App Show')
        resolve(true)
      })
    },
    onHide: function() {
      console.log('App Hide')
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
