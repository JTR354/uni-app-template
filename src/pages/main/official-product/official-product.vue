<template>
  <div class="official-product">
    <div class="content-box">
      <div class="section">
        <div class="img-box">
          <img
            class="section-img"
            mode="widthFix"
            src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577518541127-347911"
            alt=""
          >
          <p class="img-txt">
            十大营销和管理功能，同时为落地赋能还匹配了6大裂变赢利系统、36计、72变、365招的多维度店面赢利裂变课程，通过赞播商学院全年全国滚动培训，真正解决会员店面十大营销和管理问题。
          </p>
        </div>
        <div class="section-content">
          <div class="section-item border-bottom-1px border-top-1px" @click="toDetail(1)">
            <div class="left-box">
              <img
                class="item-img"
                src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577522675634-698907"
                alt=""
              >
            </div>
            <div class="right-box">
              <div class="title">新零售解决方案</div>
              <div class="content">
                5G浪潮来袭，一切将被重构与颠覆！在智能化时代、AI洪流里，各行各业更新迭代非常快，实体门店要想在5G浪潮中得以生存和发展，就要把握住科技进步带来的红利，学会运用现代化信息技术，掌握数字化运营能力，实现门店降本增值。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import * as Helpers from './helpers'
// import API from '@/api'
// import Demo from './demo/demo'

  const PAGE_NAME = 'OFFICIAL_PRODUCT'

  export default {
    name: PAGE_NAME,
    data() {
      return {
      }
    },
    methods: {
      toDetail(idx) {
        uni.navigateTo({ url: `${this.$routes.mainOfficialProdetail}?idx=${idx}`})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/*@import "~@design"*/

.official-product
  width: 100%
.content-box
  background: white
  .title-box
    height: 44px
    line-height: 44px
    text-align: center
    font-size: 16px
    color: #222222
  .section
    display: flex
    flex-direction: column
    align-items: center
    padding: 0 15px
    .img-box
      width: 100%
      .section-img
        width: 100%
      .img-txt
        font-size: 15px
        color: #222222

    .section-content
      padding-top: 12px
      .section-item
        display: flex
        height: 84px
        padding: 10px 0
        .left-box
          width: 120px
          height: 84px
          margin-right: 10px
          .item-img
            width: 100%
            height: 100%
            background: #ccc
        .right-box
          flex: 1
          overflow: hidden
          display: flex
          flex-direction: column
          justify-content: space-between
          .title
            font-size: 16px
            font-weight: bold
            color: #222222
            line-height: 20px
            padding-bottom: 4px
          .content
            flex: 1
            font-size: 14px
            color: #555555
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 3;
            overflow: hidden

</style>
