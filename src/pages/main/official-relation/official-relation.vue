<template>
  <div class="offical-relation">
    <div class="relation-content">
      <div class="from-item border-bottom-1px">
        <div class="item-input">
          <input v-model="name" class="input" type="text" placeholder="门店名称" placeholder-class="input-p">
        </div>
      </div>
      <div class="from-item border-bottom-1px">
        <div class="item-input">
          <input
            v-model="phone"
            class="input"
            type="number"
            placeholder="手机号码"
            placeholder-class="input-p"
            maxlength="11"
          >
        </div>
      </div>
      <div class="form-btn" :class="{disable: !name || !phone}" @click="clickHandle">提交申请</div>
    </div>
    <div v-if="coverShow" class="cover" @click="hideCover">
      <div class="cover-box">
        <img class="cover-icon" src="./icon-payok@2x.png" alt="">
        <div class="cover-title">申请成功</div>
        <div class="cover-subtitle">客服稍后联系您</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import * as Helpers from './helpers'
// import API from '@/api'
// import Demo from './demo/demo'
  import API from '@api'
  import HTTP from '@api/http'

  const PAGE_NAME = 'OFFICAL_RELATION'

  export default {
    name: PAGE_NAME,
    data() {
      return {
        name: '',
        phone: '',
        coverShow: false
      }
    },
    methods: {
      showCover() {
        this.coverShow = true
      },
      hideCover() {
        this.coverShow = false
      },
      async clickHandle() {
        if (!this.name) {
          uni.showToast({
            title: '请输入您的称呼',
            icon: 'none'
          })
          return
        }
        if (!this.phone) {
          uni.showToast({
            title: '请输入您的联系电话',
            icon: 'none'
          })
          return
        }
        const res = await this.checkPhone()
        if (res) {
          const codeMsg = await this.$uniapp.login()
          const that = this
          uni.getUserInfo({
            withCredentials: true,
            success(res) {
              console.log(res, 'success')
              if (res.errMsg === 'getUserInfo:ok') {
                const loginData = {
                  code: codeMsg.code,
                  iv: res.iv,
                  encrypted_data: res.encryptedData,
                  mobile: that.phone
                }
                API.Login.getToken({
                  data: loginData,
                  toast: false
                }).then(res => {
                  if (res.error_code !== that.$ERR_OK) return
                  that.$storage('token', res.data.access_token)
                  that.$storage('userInfo', res.data.customer_info)
                  that.$storage('distributer', res.data.distributer)
                  that.$storage('shopId', res.data.distributer.access_id)
                  HTTP.setHeaders({ Authorization: res.data.access_token })
                  uni.reLaunch({ url: `${that.$routes.mainHome}`})
                })
              }
            },
            fail() {
              uni.showToast({
                title: '授权失败，请设置后重试',
                icon: 'none'
              })
              uni.openSetting({})
            }
          })
        } else {
          this.showCover()
        }
      },
      async checkPhone() {
        const res = await API.Shop.checkShop({
          data: {mobile: this.phone},
          loading: false,
          toast: false
        }).catch(err => {
          return err
        })
        if (res.error_code !== this.$ERR_OK) {
          return false
        }
        return res.data.have_shop
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/*@import "~@design"*/

.offical-relation
  width: 100vw
  height: 100vh
  box-sizing: border-box
  background: white

.cover
  position: fixed
  left: 0
  top: 0
  width: 100vw
  height: 100vh
  background: rgba(0, 0, 0, 0.12)
  z-index: 1
  .cover-box
    position: absolute
    left: 50%
    top: 30vh
    transform: translate(-50%, 0)
    background: white
    border-radius: 6px
    width: 280px
    padding: 30px 0
    display: flex
    flex-direction: column
    align-items: center
    z-index: 1
    .cover-icon
      width: 70px
      height: 70px
    .cover-title
      font-size: 20px
      font-bold()
      color: #3F454B
      letter-spacing: 0.8px
      margin-top: 10px
    .cover-subtitle
      font-size: 14px
      color: #818D99
      margin-top: 2px
.relation-content
  padding: 26px 28px
  box-sizing: border-box
  .from-item
    height: 64px
    .item-input
      width: 100%
      height: 100%
      .input
        width: 100%
        height: 100%
        font-size: 16px
        line-height: 64px
        box-sizing: border-box
        padding: 0 5px
      .input-p
        color: #99A0AA
  .form-btn
    margin-top: 49px
    padding: 0 12px
    height: 45px
    line-height: 45px
    text-align: center
    color: white
    letter-spacing: 0.8px
    font-size: 18px
    font-bold()
    background-image: linear-gradient(90deg, #FE7754 0%, #ED2B2B 100%)
    border-radius: 54.5px
    &.disable
      opacity: 0.5
.test
  whidh: 100vw
</style>
