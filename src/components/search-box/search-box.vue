<template>
  <div class="search-box">
    <div class="search-wrapper">
      <div class="input-wrapper">
        <img class="search-img" mode="aspectFit" src="./icon-search@2x.png">
        <input
          v-model="goodsName"
          type="text"
          placeholder="请输入商品名称"
          placeholder-class="input-p"
          confirm-type="search"
          @confirm="handleConfirm"
        >
        <figure v-if="goodsName" class="close" @click="handleClearGoodsName">
          <img class="close-img" mode="aspectFit" src="./icon-delsr@2x.png">
        </figure>
      </div>
      <div class="btn" @click.stop="handleSearch('')">搜索</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'SEARCHBOX',
    props: {
    },
    data() {
      return {
        goodsName: '', // 搜索的商品名称
      }
    },
    methods: {
      handleConfirm() {
        this.handleSearch()
      },
      handleSearch(goodsName = '') {
        const searchName = goodsName || this.goodsName
        this.$emit('goodsSearch', searchName)
      },
      handleClearGoodsName() {
        this.goodsName = ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/*@import "~@design"*/

.search-box
  width: 100%
  height: 44px
  .search-wrapper
    font-family: $font-family-regular
    padding :0 12px
    layout(block, block, nowrap)
    align-items :center
    z-index :50
    .input-wrapper
      flex: 1
      height :34px
      display :flex
      align-items :center
      background :#F4F4F4
      padding : 0 13px 0 15px
      border-radius :@height
      position :relative
      .close
        position :absolute
        right :0
        height :34px
        width :@height
        display :flex
        align-items :center
        justify-content :flex-end
        .close-img
          width :13px
          height @width
          padding-right :13px
      .search-img
        width :14px
        height :13.5px
      input
        flex: 1
        height :20px
        padding : 0 15px 0 8px
        font-size :15px
        line-height :@height
    .btn
      font-size :15px
      padding-left :14px
      color: #222
</style>
