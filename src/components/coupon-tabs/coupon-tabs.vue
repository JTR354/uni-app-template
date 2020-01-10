<template>
  <div class="coupon-tabs">
    <div v-for="(item, idx) in tabs" :key="idx" class="tab-item">
      <div class="item-container" @click="changeTabs(idx)">
        <img class="item-img" :src="`/static/images/tabs/${selectIdx == idx ? item.selectIcon : item.icon}`" alt="">
        <p class="item-txt" :class="{active: selectIdx == idx}">{{item.txt}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'COUPON_TABS'

  const TABS_MERCHANT = [
    {txt: '淘宝', icon: 'icon-tb.png', selectIcon: 'icon-tb_pressed.png', url: 'mainHome'},
    {txt: '拼多多', icon: 'icon-pdd.png', selectIcon: 'icon-pdd_pressed.png', url: 'mainPddList'},
    {txt: '我的', icon: 'icon-my.png', selectIcon: 'icon-my_pressed.png', url: 'mainMine'}
  ]

  const TABS_CUSTOMER = [
    {txt: '淘宝', icon: 'icon-tb.png', selectIcon: 'icon-tb_pressed.png', url: 'mainHome'},
    {txt: '拼多多', icon: 'icon-pdd.png', selectIcon: 'icon-pdd_pressed.png', url: 'mainPddList'}
  ]

  export default {
    name: COMPONENT_NAME,
    props: {
      initIdx: {
        type: String,
        default: '0'
      },
      initType: {
        type: String,
        default: 'customer'
      }
    },
    data() {
      return {
        tabs: TABS_CUSTOMER,
        selectIdx: 0
      }
    },
    created() {
      this.selectIdx = this.initIdx
      if (this.initType === 'merchant') {
        this.tabs = TABS_MERCHANT
      }
    },
    methods: {
      changeTabs(idx, item) {
        if (+this.selectIdx === +idx) {
          return
        }
        this.selectIdx = idx
        uni.reLaunch({url: this.$routes[this.tabs[this.selectIdx].url]})
      },
      initTabs(idx) {
        this.selectIdx = idx || 0
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.coupon-tabs
  width: 100%
  display: flex
  height: 49px
  box-shadow: 0 -1px 0 0 #EEEEEE, 0 -3px 12px 0 rgba(238,238,238,0.50)
  background: #ffffff
  position: fixed
  left: 0
  bottom: 0
  z-index: 110
  .tab-item
    flex: 1
    overflow: hidden
    display: flex
    justify-content: center
    align-items: center
    .item-container
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      padding: 4px 10px
      .item-img
        display: block
        width: 27px
        height: 27px
      .item-txt
        font-size: 10px
        color: #888888
        &.active
          color: $color-origin
.test
  width: 100%
</style>
