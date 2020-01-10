<template>
  <div class="empty-search">
    <img src="./pic-nosearch.png" alt="" class="icon">
    <p class="title">未找到你想要的商品</p>
    <p class="title-sub">换个关键词试试吧</p>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'EMPTY_SEARCH'

  export default {
    name: COMPONENT_NAME
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .empty-search
    width: 100%
    font-family: $font-family-regular
    line-height :1
    display :flex
    flex-direction :column
    justify-content :center
    align-items:center
    padding-top :118.5px
  .icon
    width: 100px
    height: 82px
  .title
    font-size: 14px
    color: #808080
    padding :19.5px 0 8.5px
  .title-sub
    font-size: 13px
    color: #B7B7B7

  @keyframes show{
    0%{
      opacity :0
    }
    99% {
      opacity :0
    }
    100% {
      opacity :1
    }
  }
</style>