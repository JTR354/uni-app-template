<template>
  <div class="wxpay-log">
    <dl class="logs">
      <dt class="logs__title"></dt>
      <dd v-for="(item, index) in logs" :key="index" class="logs__item">
        <img :src="avatar" alt="" class="item__left" mode="aspectFill">
        <div class="item__middle item__common">
          <h1 class="order">订单编号: {{item.source_sn}}</h1>
          <div class="time">
            <div class="time__icon">{{item.source_type_str}}</div>
            {{item.created_at}}
          </div>
        </div>
        <div class="item__right item__common">
          <p class="number">{{item.money}}</p>
          <p class="explain">余额: ¥{{item.after_remaining}}</p>
        </div>
      </dd>
      <dd v-if="isEmpty" class="logs__empty">
        <empty paddingTop="100vh" tip="暂无数据"></empty>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ecmascript-6">
// import * as Helpers from './modules/helpers'
  import API from '@api'
  import Empty from '@components/empty/empty'

  const PAGE_NAME = 'WXPAY_LOG'

  export default {
    name: PAGE_NAME,
    components: {
      Empty
    },
    data() {
      return {
        logs: [],
        page: 1,
        hasMore: true,
        isEmpty: false,
        avatar: this.$storage('userInfo').avatar || ''
      }
    },
    onLoad() {
      this._getLogs()
    },
    onReachBottom() {
      this.page++
      this._getLogs()
    },
    onPullDownRefresh() {
      this.page = 1
      this.hasMore = true
      this._getLogs(false)
      wx.stopPullDownRefresh()
    },
    methods: {
      _getLogs(loading) {
        if (!this.hasMore) return
        const data = {
          page: this.page
        }
        API.Coupon.billLogs({data, loading}).then(res => {
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

.wxpay-log
  min-height :100vh
  background :#fff

.logs
  background :#fff
  .logs__title
    padding-bottom :10px
    font-family: $font-family-regular
    font-size: 15px
    color: #1D2023
    line-height: 1
    background :$color-background
  .logs__item
    margin : 0 10px
    height: 69px
    display:flex
    align-items :center
    position: relative
    &:after
      content: ""
      border-bottom: 1px solid $color-line
      position: absolute
      bottom: 0
      right: -10px
      left :0
      transform: scaleY(.5) translateZ(0)
      transform-origin: 0
    .item__common
      display :flex
      flex-direction :column
      justify-content :center
    .item__left
      width: 40px
      height: @width
      background: #F7F7F7
      border-radius: 50%
    .item__middle
      flex: 1
      padding :0 10px
      overflow :hidden
      .order
        font-size: 14px
        color: #1D2023
        no-wrap()
      .time
        font-size: 11px
        color: #8B8B8B
        padding-top :8px
        no-wrap()
        display :flex
        align-items :center
        .time__icon
          height: 14px
          border-radius :@height
          padding :2px 5px
          font-family: $font-family-regular
          font-size: 10px
          color: #545556
          line-height: @height
          margin-right :5px
          border-1px(#545556, 17px)
    .item__right
      .number
        font-bold()
        font-size: 16px
        color: #1D2023;
        text-align: right
        &.number--red
          color: #D33B32;
          letter-spacing: 0.32px
      .explain
        padding-top :7px
        font-size: 11px
        color: #8B8B8B
.logs__empty
  height 90vw
  background :#fff
</style>
