<template>
  <div class="wxpay-apply">
    <section class="bind-card" @click="navHandle">
      <p class="name" :class="{active: cardBank}">{{cardBank || '添加银行卡'}}</p>
      <p class="middle">{{cardNumber}}</p>
      <img src="/static/images/icon-pressed_my@2x.png" alt="" class="arrow-right">
    </section>
    <section class="money-wrapper">
      <p class="title">提现金额</p>
      <div class="input-wrapper">
        <span class="unit">¥</span>
        <input v-model="money" type="digit" class="input-default" maxlength="20">
      </div>
      <p class="bottom">
        <span class="left">可提现金额</span>
        <span class="middle">¥{{balance}}</span>
        <span class="right" @click="_goToWithdraw">提现记录</span>
      </p>
    </section>
    <!--    <p class="explain">银行按提现金额0.1%收取手续费，最低1元。每日可提现3次，单笔限额2000元。提交成功后，预计1~3个工作日到账。</p>-->
    <button class="button" :class="{active: checkApply}" @click="submitHandle">提现</button>
    <ul class="explain">
      <li class="explain__item"><span class="dot"></span>银行按提现金额0.1%收取手续费，最低1元</li>
      <li class="explain__item"><span class="dot"></span>每日可提现3次，单笔限额2000元</li>
      <li class="explain__item"><span class="dot"></span>提交成功后，预计1~3个工作日到账</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
// import * as Helpers from './modules/helpers'
  import API from '@api'

  const PAGE_NAME = 'WXPAY_APPLY'

  export default {
    name: PAGE_NAME,
    data() {
      return {
        type: '',
        cardNumber: '',
        cardBank: '',
        bankCardId: '',
        cardInfoId: '',
        balance: 0,
        money: '',
        rule: 100,
        time: '2-5'
      }
    },
    computed: {
      regCardNumber() {
        return this.cardNumber
      },
      regCardBank() {
        return this.cardBank
      },
      regMoney() {
        return this.money >= this.rule
      },
      regBalance() {
        return this.money <= this.balance
      },
      checkApply() {
        return this.regCardNumber && this.regCardBank && this.regMoney && this.regBalance
      }
    },
    onLoad(options) {
      this.type = options.type * 1
      this.balance = options.allowGet
    },
    onShow() {
      this._getPropertyInfo()
      this.getBankCardDetail()
    },
    methods: {
      // 获取可提现余额
      _getPropertyInfo(loading = false) {
        API.Coupon.getAccount({loading})
          .then((res) => {
            this.balance = res.data.remaining || 0
          })
      },
      // 银行卡信息
      getBankCardDetail(loading) {
        API.Coupon.bankInfo({loading}).then((res) => {
          if (res.data.bank_id) {
            this.cardBank = res.data.bank_name
            this.bankCardId = res.data.bank_id
            this.cardNumber = res.data.bank_card
            this.cardInfoId = res.data.id
            this.rule = (res.data.min_limit * 1) || 100
          }
        })
      },
      navHandle() {
        const url = this.$routes.usersWxpayBank + '?id=' + this.cardInfoId
        wx.navigateTo({url})
      },
      _goToWithdraw() {
        const url = this.$routes.usersWxpayLog + '?type=' + this.type
        wx.navigateTo({url})
      },
      // 申请提现
      submitHandle() {
        if (!this.check()) {
          return
        }
        const data = {money: this.money}
        API.Coupon.toBill({data})
          .then((res) => {
            this.money = ''
            this._getPropertyInfo()
            this.$wechat.showToast('申请成功！')
          })
      },
      check() {
        let result = true
        const checkArr = [
          {value: this.regCardNumber, msg: '请选择银行卡'},
          {value: this.regMoney, msg: `提现金额必须大于等于${this.rule}`},
          {value: this.regBalance, msg: `余额不足`}
        ]
        for (let i = 0; i < checkArr.length; i++) {
          const item = checkArr[i]
          if (!item.value) {
            result = item.value
            this.$wechat.showToast(item.msg)
            break
          }
        }
        return result
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

.corp-platform-goods-btn
  color: $color-main
  border-1px($color-main, 15px)

.corp-platform-text
  color: $color-main

.corp-platform-bg
  background: $color-main

.wxpay-apply
  width: 100%

.bind-card
  border-top : 10px solid #f5f5f9
  background :#fff
  padding : 0 15px 0 10px
  height: 55px
  layout(row,block,nowrap)
  align-items :center
  font-family: $font-family-regular
  line-height :1
  .name
    font-size: 14px;
    color: #818D99;
    &.active
      color: #1D2023
  .middle
    flex: 1
    font-size: 14px;
    color: #3F454B;
    padding :0 6px
    text-align :right
  .arrow-right
    width: 10px
    height: 10px

.money-wrapper
  font-family: $font-family-regular
  line-height :1
  border-top : 10px solid #f5f5f9
  background :#fff
  padding : 0 10px
  height: 151.5px
  .title
    padding-top:18px
    padding-bottom :13px
    font-size: 14px;
    color: #3F454B;
  .input-wrapper
    layout(row)
    align-items: center
    padding: 13px 0
    border-bottom-1px(#ECEDF1)
    font-size: 35px
    line-height : 1
    font-bold()
    .input-default
      height :35px
      line-height :@height
      padding-left: 10px
      width :80%
      min-height :35px
      font-bold()
  .bottom
    padding-top: 18px
    font-size: 14px;
    letter-spacing: 0.6px;
    layout(row,block,nowrap)
    .left
      color: #818D99;
    .middle
      flex: 1
      margin-left :5px
      color:#000
    .right
      color: #5B93E1


.explain
  padding :15px
.explain__item
  font-family: $font-family-regular
  font-size: 12px
  color: #888888
  line-height: 22px
  .dot
    display :inline-block
    width: 5px
    height: @width
    border-radius :50%
    background: #888888
    margin-right :5px


.button
  margin :20px 10px 0
  height: 45px
  background: #F54131
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #FFFFFF;
  border-radius :@height
  line-height :@height
  letter-spacing: 0.8px;
  text-align: center;
  opacity : 0.5
  transition :opacity 0.2s
  &.active
    opacity : 1
</style>
