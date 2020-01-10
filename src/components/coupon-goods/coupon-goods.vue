<template>
  <div class="coupon-goods" @click="handleGoodsClick(goods)">
    <div class="left-box">
      <img
        v-if="goodsType[goods.mall_type] === 'tb'"
        src="/static/images/pic-default_tb@2x.png"
        class="goods-img bc"
        alt=""
      >
      <img
        v-if="goodsType[goods.mall_type] === 'pdd'"
        src="/static/images/pic-default_pdd@2x.png"
        class="goods-img bc"
        alt=""
      >
      <img :src="goods.goods_image_url" alt="" class="goods-img">
    </div>
    <div class="right-box">
      <div class="goods-top">
        <p class="goods-title"><img v-if="goodsType[goods.mall_type] === 'pdd'" class="title-icon" src="/static/images/icon-pddjx@2x.png" alt=""><img v-if="goodsType[goods.mall_type] === 'tb'" class="title-icon" src="/static/images/icon-tbjx@2x.png" alt=""><span class="block-box"></span>{{goods.goods_name}}</p>
        <div class="goods-sales">销量 {{goods.volume}}</div>
      </div>
      <div class="goods-msg">
        <div class="msg-left">
          <div class="coupon-flag">
            <span class="flag">{{goods.coupon_discount}}元券</span>
          </div>
          <div class="goods-price">
            券后 ¥<span class="red-price">{{goods.goods_price}}</span>
          </div>
        </div>
        <div class="msg-right">省 <span class="bold-txt">¥{{goods.coupon_discount}}</span></div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import API from '@api'
  const GOODSTYPE = {
    1: 'tb',
    2: 'pdd',
    3: 'jd'
  }
  export default {
    name: 'COUPONGOODS',
    props: {
      // 标题
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        goodsType: GOODSTYPE
      }
    },
    methods: {
      handleGoodsClick(goods) {
        const url = `${this.$routes.mainGoodsDetail}?type=${goods.mall_type}&goodsId=${goods.goods_id}&couponId=${goods.coupon_id}`
        if (+goods.mall_type === 1) {
          API.Goods.setTbURL({
            data: {
              type: goods.mall_type,
              goods_id: goods.goods_id,
              share_url: goods.goods_coupon_share_url
            }
          }).then(res => {
            uni.navigateTo({url})
          })
          return
        }
        uni.navigateTo({url})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/*@import "~@design"*/

.coupon-goods
  width: 100%
  height: 34.66vw
  display: flex
  padding: 0 12px
  box-sizing: border-box
  margin-bottom: 25px
  .left-box
    width: 34.66vw
    height: @width
    margin-right: 10px
    position: relative
    border-radius: 2px
    overflow: hidden
    .goods-img
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
  .right-box
    flex: 1
    overflow: hidden
    display: flex
    flex-direction: column
    justify-content: space-between
    padding-bottom: 2px
    .goods-top
      width: 100%
      .goods-title
        color: $color-text-main
        font-family: $font-family-regular
        font-size: $font-size-normal
        line-height: 20px
        margin-bottom: 5px
        display: -webkit-box;
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
        position: relative
      .block-box
        padding: 10px
      .title-icon
        width: 16px
        height: 16px
        margin-right: 2px
        position: absolute
        left: 0
        top: 1px
      .goods-sales
        color: $color-text-sub
        font-size: $font-size-thin
    .goods-msg
      display: flex
      align-items: flex-end
      justify-content: space-between
      .msg-left
        display: flex
        flex-direction: column
        padding-bottom: 2px
        .coupon-flag
          display: flex
          .flag
            padding: 2px 4px
            background: rgba(245,65,49,.12)
            border-radius: 2px
            color: $color-origin
            font-size: $font-size-thin
        .goods-price
          margin-top: 8px
          display: flex
          align-items: flex-end
          font-size: $font-size-thin
          color: $color-origin
          .red-price
            font-bold()
            font-size: 17px
            margin-bottom: -2px
      .msg-right
        width: 70px
        height: 28px
        line-height: 28px
        text-align: center
        background: $color-origin
        border-radius: 3px
        color: $color-white
        font-size: 13px
        .bold-txt
          font-bold()
.test
  width: 100%
</style>
