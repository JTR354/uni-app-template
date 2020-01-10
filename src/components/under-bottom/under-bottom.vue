<template>
  <div class="under-bottom">
    <div class="bottom-txt">{{text}}</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'UNDERBOTTOM',
    props: {
      // 标题
      text: {
        type: String,
        default: '到底了'
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/*@import "~@design"*/

.under-bottom
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  height: 34px
  .bottom-txt
    font-size: 14px
    color: #888888
    font-family: PingFangSC-Regular
    position: relative
    &:before, &:after
      content: '~'
      display: block
      position: absolute
      top: 50%
      transform: translate(0, -50%)
      color: #888888
      font-size: 14px
    &:before
      left: -13px
    &:after
      right: -13px
.test
  width: 100%
</style>
