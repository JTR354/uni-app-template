<template>
  <div class="official-scheme">
    <div class="content-box">
      <div class="section">
        <div class="section-content">
          <div class="section-item border-bottom-1px" @click="toDetail(2)">
            <div class="left-box">
              <img
                class="item-img"
                src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577514675145-015560"
                alt=""
              >
            </div>
            <div class="right-box">
              <div class="title">品牌馆</div>
              <div class="content">
                赞播5G美业新店商携手多所等高等学府研发领先的专利技术、打造国内独一无二的爆品体系，与桂林市政府携手打造“中国长发科技馆”，造就地标性匠心产品，并与众多美业国际品牌、国内一线品牌的核心供应商达成深度战略合作。
              </div>
            </div>
          </div>
          <div class="section-item border-bottom-1px" @click="toDetail(3)">
            <div class="left-box">
              <img
                class="item-img"
                src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577523390801-625578"
                alt=""
              >
            </div>
            <div class="right-box">
              <div class="title">门店数字化</div>
              <div class="content">
                从项目设计、营销方式、智能诊断三个方面提升门店的营销管理水平；从“数据统计”到“发现问题”再到“解决方案”输出，直接提高门店的业绩效能。
              </div>
            </div>
          </div>
          <div class="section-item border-bottom-1px" @click="toDetail(4)">
            <div class="left-box">
              <img
                class="item-img"
                src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577523557665-322216"
                alt=""
              >
            </div>
            <div class="right-box">
              <div class="title">赞播大学一体化培训</div>
              <div class="content">
                赞播大学拥有全国顶尖美业终端实战专家、优秀企业顶级品牌运营专家，数十万家企业落地经验，在拓客引流、专业老板培养、美导培训及终端运营等多个维度具有丰富的实战经验。
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

  const PAGE_NAME = 'OFFICIAL_SCHEME'

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

.official-scheme
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
