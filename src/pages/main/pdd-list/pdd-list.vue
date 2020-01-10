<template>
  <div class="pdd-list">
    <div class="search-container">
      <search-box ref="searchBox" @goodsSearch="goodsSearch"></search-box>
    </div>
    <div class="goods-list">
      <block v-for="item in goodsList" :key="item.goods_id">
        <coupon-goods :goods="item"></coupon-goods>
      </block>
      <empty-search v-if="isEmpty"></empty-search>
    </div>
    <under-bottom v-if="hasNoMore"></under-bottom>
    <coupon-tabs ref="couponTabs" :initIdx="1" :initType="identity"></coupon-tabs>
    <auth-confirm></auth-confirm>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as Helpers from './modules/helpers'
  import API from '@api'
  import AppPromise from '@utils/app-promise'
  import SearchBox from '@components/search-box/search-box'
  import CouponGoods from '@components/coupon-goods/coupon-goods'
  import UnderBottom from '@components/under-bottom/under-bottom'
  import CouponTabs from '@components/coupon-tabs/coupon-tabs'
  import AuthConfirm from '@components/auth-confirm/auth-confirm'
  import EmptySearch from '@components/empty-search/empty-search'

  const PAGE_NAME = 'HOME'

  export default {
    name: PAGE_NAME,
    components: {
      SearchBox,
      CouponGoods,
      UnderBottom,
      CouponTabs,
      AuthConfirm,
      EmptySearch
    },
    data() {
      return {
        page: 1,
        goodsList: [],
        hasNoMore: false,
        identity: 'customer',
        keyword: '',
        isEmpty: false
      }
    },
    computed: {
      ...Helpers.homeComputed,
    },
    onShareAppMessage() {
      return {
        title: '拼多多精选,千万好货领券抢购',
        path: `/page/home/home?shopId=${this.$storage('shopId')}`,
        templateId: '5lfebnnmp1hasahtct'
      }
    },
    // 下拉刷新
    onPullDownRefresh() {
      this.page = 1
      this.keyword = ''
      this.$refs.searchBox && this.$refs.searchBox.handleClearGoodsName()
      this.getGoodsList(true)
      uni.stopPullDownRefresh()
    },
    onReachBottom() {
      if (this.hasNoMore) return
      this.page++
      this.getGoodsList(true)
    },
    onLoad() {
      AppPromise.getInstance().then(() => {
        this.identity = this.$storage('userInfo').is_register ? 'merchant' : 'customer'
        this.getGoodsList(true)
      })
      // uni.navigateTo({url: this.$path.usersMine})
    },
    methods: {
      ...Helpers.homeMethods,
      getGoodsList(loading = false) {
        const data = {
          type: 'pdd_explosion',
          access_id: this.$storage('shopId'),
          page: this.page,
          limit: 10,
          keyword: this.keyword
        }
        API.Goods.getPddGoodsList({data, loading}).then(res => {
          console.log(res)
          if (+this.page === 1) {
            this.hasNoMore = false
            this.goodsList = []
          }
          this.goodsList = this.goodsList.concat(res.data)
          if (!res.data.length && +this.page > 1) {
            this.hasNoMore = true
          }
          this.isEmpty = !this.goodsList.length
        })
      },
      goodsSearch(name) {
        this.page = 1
        this.keyword = name
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 0
        })
        this.getGoodsList(true)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.pdd-list
  min-height: 100vh
  background: white
  padding-top: 34px
  padding-bottom: 60px

.goods-list
  padding-top: 22px

.search-container
  width: 100%
  background: white
  position: fixed
  left: 0
  top: 0
  z-index: 1
</style>
