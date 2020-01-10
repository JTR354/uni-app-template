<template>
  <div class="goods-detail">
    <div class="banner-box">
      <swiper class="banner" @change="bannerChange">
        <block v-for="(item, index) in goodsDetail.goods_gallery_url" :key="index">
          <swiper-item class="banner-item">
            <img :src="item" class="item-img" mode="aspectFill">
          </swiper-item>
        </block>
      </swiper>
      <span class="page-box"><text class="currentNum">{{bannerIndex}}</text>/{{goodsDetail.goods_gallery_url.length}}</span>
    </div>
    <div class="goods-msg">
      <div class="msg-top">
        <div class="goods-price">
          <span>券后</span><span class="price-icon">¥</span><span class="red-price">{{goodsDetail.goods_price}}</span><span class="del-price">¥{{goodsDetail.goods_underline_price}}</span>
        </div>
        <button class="share-button" open-type="share">
          <img class="share-icon" src="./icon-share@2x.png" alt="">
          <p class="share-txt">分享</p>
        </button>
      </div>
      <p class="goods-title"><img v-if="+goodsDetail.mall_type === 1" src="/static/images/icon-tbxq@2x.png" class="title-flag" alt=""><img v-if="+goodsDetail.mall_type === 2" class="title-flag" src="/static/images/icon-pddxq@2x.png" alt=""><span class="block-box"></span>{{goodsDetail.goods_name}}</p>
      <div class="goods-sales">销量 {{goodsDetail.volume}}</div>
      <div class="coupon-box" @click="getCoupon">
        <div class="coupon-msg">
          <div class="coupon-name">{{goodsDetail.coupon_discount || 0}}元优惠券</div>
          <div class="coupon-time">截止日期: {{goodsDetail.coupon_end_time}}</div>
        </div>
        <div class="coupon-btn">
          <div class="btn-txt">立即领取</div>
          <img class="btn-arrow" src="./icon-white_arrow@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="line-box"></div>
    <div class="goods-content">
      <div class="content-title">
        <div class="title-txt">商品详情</div>
      </div>
      <img
        v-for="(item, index) in goodsDetail.goods_gallery_url"
        :key="index"
        class="goods-detail-img"
        :src="item"
        alt=""
        mode="widthFix"
      >
    </div>
    <div class="bottom-btn">
      <div class="btn-box" @click="getCoupon">领券购买，立减{{goodsDetail.coupon_discount || 0}}元</div>
    </div>
    <div v-if="coverShow" class="cover-box">
      <div v-if="+goodsDetail.mall_type === 1" class="tb-content content-box">
        <div class="content-title">温馨提示</div>
        <div class="content-txt">复制成功！请打开手机淘宝领券</div>
        <div class="content-btn border-top-1px" @click="hideCover">我知道了</div>
      </div>
      <div v-if="+goodsDetail.mall_type === 2" class="pdd-content content-box">
        <div class="content-title">温馨提示</div>
        <div class="content-txt">复制成功！请打开手机浏览器领券</div>
        <div class="content-url-box">
          <div class="content-url">{{goodsDetail.goods_coupon_share_url}}</div>
        </div>
        <div class="content-btn border-top-1px" @click="hideCover">我知道了</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import * as Helpers from './modules/helpers'
  import API from '@api'
  import AppPromise from '@utils/app-promise'

  const PAGE_NAME = 'GOODS_DETAIL'

  export default {
    name: PAGE_NAME,
    data() {
      return {
        bannerIndex: 1,
        goodsId: '',
        type: '',
        couponId: '',
        path: '',
        goodsDetail: {},
        coverShow: false,
        tbCode: ''
      }
    },
    computed: {
    // ...Helpers.goodsDetailComputed,
    },
    onShareAppMessage() {
      return {
        title: `火速抢,领券即买${this.goodsDetail.goods_name}`,
        path: `${this.$routes.mainGoodsDetail}?type=${this.goodsDetail.mall_type}&goodsId=${this.goodsDetail.goods_id}&couponId=${this.couponId}&shopId=${this.$storage('shopId')}`,
        templateId: '5lfebnnmp1hasahtct'
      }
    },
    onLoad(options) {
      AppPromise.getInstance().then(() => {
        this.type = options.type
        this.goodsId = options.goodsId
        this.couponId = options.couponId
        this.getGoodsDetail(true)
      })
    },
    methods: {
      // 顶部商品轮播图
      bannerChange(current) {
        this.bannerIndex = current.target.current + 1
      },
      getGoodsDetail(loading = false) {
        const data = {
          type: this.type,
          access_id: this.$storage('shopId'),
          goods_id: this.goodsId,
          coupon_id: this.couponId
        }
        console.log(data)
        API.Goods.getGoodsDetail({data, loading}).then(res => {
          this.goodsDetail = res.data
          if (this.goodsDetail.mall_type === 1) {
            this.getTbCodes()
          }
        })
      },
      getTbCodes() {
        API.Goods.getTbCode({
          data: {
            text: this.goodsDetail.goods_name,
            url: this.goodsDetail.goods_coupon_share_url,
            access_id: this.$storage('shopId'),
          }
        }).then(res => {
          this.tbCode = res.data.password
        })
      },
      getCoupon() {
        if (this.goodsDetail.mall_type === 1) {
          uni.setClipboardData({
            data: this.tbCode
          })
        } else {
          uni.setClipboardData({
            data: this.goodsDetail.goods_coupon_share_url
          })
        }
        this.coverShow = true
      },
      hideCover() {
        this.coverShow = false
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

.goods-detail
  min-height: 100vh
  padding-bottom: 70px
.banner-box
  width: 100vw
  height: 100vw
  position: relative
  .banner
    width: 100vw
    height: 100vw
    .banner-item
      width: 100%
      height: 100%
      .item-img
        width: 100%
        height: 100%
  .page-box
    position: absolute
    right: 15px
    bottom: 15px
    padding: 2px 8px
    border-radius: 20px
    background: rgba(69,90,100,0.3)
    font-family: $font-family-regular
    font-size: $font-size-thin
    color: $color-white
    vertical-align: text-bottom
    .currentNum
      font-bold()
      font-size: 15px
      color: $color-white
.goods-msg
  background: white
  padding: 0 10px
  .msg-top
    height: 54px
    display: flex
    justify-content: space-between
    align-items: center
    .goods-price
      display: flex
      align-items: flex-end
      color: #F54131
      font-size: 15px
      .price-icon
        font-bold()
        font-size: 18px
        margin: 0 2px -2px 3px
      .red-price
        font-bold()
        font-size: 25px
        margin-bottom: -4px
      .del-price
        font-size: 14px
        color: #888888
        margin-left: 8px
        position: relative
        &:after
          content: ''
          width: 100%
          height: 0.5px
          background: #888888
          position: absolute
          left: 0
          top: 50%
    .share-button
      display: flex
      flex-direction: column
      justify-content: center
      padding: 9px
      .share-icon
        width: 19px
        height: 19px
        margin-bottom: 4px
      .share-txt
        font-size: 9px
        coloe: #555555
  .goods-title
    line-height: 24px
    font-bold()
    color: #2B2F37
    font-size: 16px
    letter-spacing: 0.6px
    position: relative
    .block-box
      padding: 11px 12px
    .title-flag
      position: absolute
      left: 0
      top: 0
      display: inline-block
      letter-spacing: 0px
      font-weight: normal
      width: 20px
      height: 20px
  .goods-sales
    margin-top: 10px
    color: #888888
    font-size: 13px
  .coupon-box
    width: 100%
    height: 75px
    border-radius: 6px
    background-image: linear-gradient(130deg, #FB765F 0%, #F54131 100%)
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 17px
    .coupon-msg
      width: 62.66vw
      height: 59px
      background: #FFEDC7
      border-radius: 3px
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      margin-left: 8px
      .coupon-name
        font-size: 20px
        line-height: 20px
        color: #924D0A
        font-bold()
        margin-bottom: 7px
      .coupon-time
        font-size: 12px
        line-height: 12px
        color: #924D0A
    .coupon-btn
      display: flex
      align-items: center
      margin-right: 13px
      .btn-txt
        color: white
        font-bold()
        font-size: 16px
        margin-right: 3px
      .btn-arrow
        width: 12px
        height: 12px
.line-box
  width: 100%
  height: 10px
  background: #F5F6FA
.goods-content
  background: white
  .content-title
    display: flex
    align-items: center
    justify-content: center
    height: 50px
    .title-txt
      color: #2B2F37
      letter-spacing: 0.75px
      font-size: 15px
      position: relative
      &:before, &:after
        content: ''
        display: block
        position: absolute
        top: 50%
        transform: translate(0, -50%) scale(1, 0.5)
        width: 27px
        height: 1px
        background: #C8CACF
      &:before
        left: -37px
      &:after
        right: -37px
  .goods-detail-img
    width: 100%
    display: block
.bottom-btn
  position: fixed
  left: 0
  bottom: 0
  background: #FFFFFF
  box-shadow: 0 -1px 0 0 #E8EAEE
  z-index: 1
  width: 100%
  height: 60px
  padding: 7px 10px
  box-sizing: border-box
  .btn-box
    width: 100%
    height: 100%
    line-height: 46px
    text-align: center
    color: $color-white
    font-size: 16px
    background: #F54131
    border-radius: 45px
.cover-box
  width: 100vw
  height: 100vh
  position: fixed
  left: 0
  top: 0
  background: rgba(34,34,34,.8)
  z-index: 2
  .content-box
    position: absolute
    width: 280px
    left: 50%
    top: 40%
    transform: translate(-50%, -50%)
    background: #FFFFFF
    border-radius: 6px
    overflow: hidden
    .content-title
      line-height: 60px
      font-bold()
      color: #222222
      font-size: 16px
      text-align: center
    .content-txt
      line-height: 16px
      font-size: 16px
      color: #222222
      text-align: center
    .content-btn
      height: 42px
      line-height: 42px
      text-align: center
      font-size: 15px
      color: #F54131
    .content-url-box
      display: flex
      justify-content: center
      margin-bottom: 17px
      .content-url
        width: 240px
        background: #F5F6FA
        border-radius: 6px
        height: 66px
        padding: 8px 10px
        box-sizing: border-box
        display: -webkit-box;
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
        overflow: hidden
        line-height: 16px
        font-size: 13px
        color: #1F1F1F
  .tb-content
    height: 150px
    .content-txt
      margin-bottom: 32px
  .pdd-content
    height: 210px
    .content-txt
      margin-bottom: 9px
.test
  width: 100%
</style>
