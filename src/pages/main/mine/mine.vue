<template>
  <div class="mine">
    <img src="./bg-my.png" alt="" mode="widthFix" class="mine__bg">
    <div class="header">
      <img :src="avatar" alt="" mode="aspectFill" class="header__avatar">
      <p class="header__name">{{name}}</p>
    </div>
    <div class="card">
      <!--      <img src="./pic-wdzc.png" alt="" class="card__bg">-->
      <section class="cards">
        <div class="cards__top">
          <div class="top__left">
            <h1 class="title">可提现佣金(元)</h1>
            <p class="number">{{cardInfo.allowGet}}</p>
          </div>
          <div class="top__right" @click="goToApply">去提现</div>
        </div>
        <div class="cards__bottom">
          <div class="bottom__item">
            <h1 class="title">佣金总收益(元)</h1>
            <p class="number">{{cardInfo.total}}</p>
          </div>
          <!-- <div class="bottom__line"></div>-->
          <div class="bottom__item">
            <h1 class="title">佣金在路上(元)</h1>
            <p class="number">{{cardInfo.onTheRoad}}</p>
          </div>
        </div>
      </section>
    </div>
    <dl class="logs">
      <!--      <dt class="logs__title">佣金记录</dt>-->
      <dd v-for="(item, index) in logs" :key="index" class="logs__item">
        <!--<img src="" alt="" class="item__left">-->
        <div class="item__middle item__common">
          <h1 class="order">订单编号: {{item.entry_order_sn}}</h1>
          <p class="time">{{item.created_at}}</p>
        </div>
        <div class="item__right item__common">
          <p class="number">{{item.money}}</p>
          <p class="explain">{{item.status_str}}</p>
        </div>
      </dd>
      <dd v-if="isEmpty" class="logs__empty">
        <empty tip="暂无数据"></empty>
      </dd>
    </dl>
    <auth-confirm></auth-confirm>
    <coupon-tabs ref="couponTabs" :initIdx="2" initType="merchant"></coupon-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
// import * as Helpers from './modules/helpers'
  import API from '@api'
  import CouponTabs from '@components/coupon-tabs/coupon-tabs'
  import Empty from '@components/empty/empty'
  import AuthConfirm from '@components/auth-confirm/auth-confirm'

  const PAGE_NAME = 'MINE'

  export default {
    name: PAGE_NAME,
    components: {
      CouponTabs,
      Empty,
      AuthConfirm
    },
    data() {
      const userInfo = this.$storage('userInfo') || {}
      return {
        logs: [],
        page: 1,
        hasMore: true,
        isEmpty: false,
        cardInfo: {
          total: '0.00',
          onTheRoad: '0.00',
          allowGet: '0.00'
        },
        avatar: userInfo.avatar,
        name: userInfo.nickname
      }
    },
    onLoad() {
      this._cardInfo()
      this._getLogs()
    },
    onReachBottom() {
      this.page++
      this._getLogs()
    },
    onPullDownRefresh() {
      this.page = 1
      this.hasMore = true
      this._cardInfo(false)
      this._getLogs(false)
      wx.stopPullDownRefresh()
    },
    methods: {
      cname(item) {
        return {'number--red': item.money && item.money.include('+')}
      },
      goToApply() {
        wx.navigateTo({url: this.$routes.usersWxpayApply + '?allowGet=' + (+this.cardInfo.allowGet)})
      },
      _cardInfo(loading) {
        API.Coupon.getCardInfo({loading}).then(res => {
          const resData = res.data
          this.cardInfo.total = (resData[1] && resData[1].statistic) || '0.00'
          this.cardInfo.onTheRoad = (resData[0] && resData[0].statistic) || '0.00'
        })
        API.Coupon.getAccount({loading}).then(res => {
          console.log(res, '-------------------')
          console.log(this.$storage('token'))
          this.cardInfo.allowGet = res.data.remaining || '0.00'
        })
      },
      _getLogs(loading) {
        if (!this.hasMore) return
        const data = {
          page: this.page
        }
        API.Coupon.commissionLogs({data, loading}).then(res => {
          if (this.page === 1) {
            this.logs = res.data
            this.isEmpty = this.logs.length === 0
          } else {
            this.logs = this.logs.concat(res.data)
          }
          this.hasMore = res.meta.current_page < res.meta.last_page
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

.mine
  min-height: 100vh
.mine__bg
  height: 167.5px
  width: 100vw
  position: absolute
  top: 0
  left: 0

.header
  display: flex
  padding :5px 15px 20px
  position: relative
  align-items :center
.header__avatar
  width: 60px
  height: @width
  border-radius :50%
  border:1px solid #ffffff
  background :#f7f7f7
.header__name
  flex: 1
  overflow :hidden
  font-bold()
  font-size: 18px
  color: #FFFFFF;
  letter-spacing: 0.6px
  line-height: 1
  padding: 0 10px
  no-wrap()

.card
  margin : 10px 10px 0 10px
  height: px2vw(147)
  overflow :hidden
  position: relative

.card__bg
  position: absolute
  width :100%
  height: 100%
  display: block

.cards
  height: 100%
  padding :0 15px
  position: relative
  display: flex
  flex-direction :column
  font-family: $font-family-regular
  font-size: 13px
  line-height: 1
  color: $color-text-main
  background: #FFFFFF
  box-shadow: 0 6px 8px 0 rgba(34,34,34,0.03)
  border-radius: 8px
.cards__top
  flex: (77/70)
  display:flex
  align-items :center
  justify-content :space-between
  border-bottom-1px(rgba(228,228,228,0.6))
  .top__left
    flex: 1
    display :flex
    flex-direction :column
    justify-content :center
    color: #555555
    .number
      font-bold()
      font-size: 25px
      line-height: 22px
      padding-top :8px
      color: $color-text-main
  .top__right
    width: 65px
    height: 27px
    box-sizing :border-box
    font-bold()
    font-size: 13px
    color: #3E1300
    border-radius: @height
    text-align :center
    line-height :@height
    background-image: linear-gradient(90deg, #FFE992 0%, #FECE59 100%);
    box-shadow: 0 3px 10px 0 rgba(231,163,0,0.20);
.cards__bottom
  flex: 1
  display flex
  align-items :center
  color: #555555
  .bottom__line
    height: 20px
    width :1px
    transform :scaleX(0.5)
    background :rgba(232,234,238,0.2)
  .bottom__item
    display :flex
    flex-direction column
    justify-content :center
    flex: 1
    overflow :hidden
    &:last-child
      padding-left :20px
    .number
      padding-top :7px
      font-bold()
      font-size: 17px
      color: #111
      line-height: 16px
.logs
  margin : 10px
  background :#fff
  position: relative
  box-shadow: 0 6px 8px 0 rgba(34,34,34,0.03)
  border-radius :8px

  .logs__title
    padding-bottom :14px
    font-family: $font-family-regular
    font-size: 15px
    color: #1D2023
    line-height: 1
    background :$color-background
  .logs__item
    margin : 0 10px
    height: 60px
    border-bottom-1px($color-line)
    display:flex
    align-items :center
    &:nth-of-type(1)
      border-radius :8px 8px 0 0
    &:nth-last-of-type(1)
      border-radius : 0 0 8px 8px
    &:last-child:after
      display :none
    .item__common
      display :flex
      flex-direction :column
      justify-content :center
    .item__left
      width: 36px
      height: @width
      background: #F7F7F7
      border-radius: 2px
    .item__middle
      flex: 1
      padding :0 7px
      overflow :hidden
      .order
        font-size: 14px
        color: #1D2023
        no-wrap()
      .time
        font-size: 12px
        color: #8B8B8B
        padding-top :8px
        no-wrap()
    .item__right
      .number
        font-bold()
        font-size: 15px;
        color: #1D2023;
        text-align: right;
        &.number--red
          color: #D33B32;
          letter-spacing: 0.32px
      .explain
        padding-top :7px
        font-size: 12px
        color: #8B8B8B
.logs__empty
  height 90vw
  border-radius :8px
  overflow :hidden
</style>
