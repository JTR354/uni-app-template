<template>
  <div class="offical-home">
    <div class="home-swiper">
      <div class="menu-icon" @click="showMenu">
        <img class="icon-img" src="./icon-cd@2x.png" alt="">
      </div>
      <img
        class="item-img"
        src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577514675145-015560"
        alt=""
      >
    </div>
    <div class="cover" :class="{'show' : showCover}" @click="hideCover">
      <div class="cover-box">
        <div class="nav-item" @click="toList(1)">
          <div class="item-txt">产品</div>
          <img class="item-icon" src="./icon-white_arrow@2x.png" alt="">
        </div>
        <div class="nav-item" @click="toList(2)">
          <div class="item-txt">方案</div>
          <img class="item-icon" src="./icon-white_arrow@2x.png" alt="">
        </div>
        <div class="nav-item" @click="toList(3)">
          <div class="item-txt">联系</div>
          <img class="item-icon" src="./icon-white_arrow@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="line-box"></div>
    <div class="home-content">
      <div class="content-box">
        <div class="title-box border-bottom-1px">产品中心</div>
        <div class="section">
          <div class="img-box">
            <div style="height: 15px"></div>
            <p class="img-txt">
              赞播集团展馆位于9.2馆B31，凭借时尚、科技、智能风格的独特设计和庞大展览空间，紧跟展会主题，在众多展馆中脱颖而出。开馆的第一天就点燃了全场咨询加盟的热潮，科技感设计让它拥有超高人气，展馆内人潮涌动。
            </p>
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
            <div class="section-item border-top-1px" @click="toDetail(1)">
              <div class="left-box">
                <img
                  class="item-img"
                  src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577522675634-698907"
                  alt=""
                  mode="aspectFill"
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
      <div class="line-box"></div>
      <div class="content-box">
        <div class="title-box border-bottom-1px">解决方案</div>
        <div class="section">
          <div class="section-content">
            <div class="section-item border-bottom-1px" @click="toDetail(2)">
              <div class="left-box">
                <img
                  class="item-img"
                  src="https://youxian-img.jkweixin.com/corp1%2F2019%2F12%2F28%2F1577514675145-015560"
                  alt=""
                  mode="aspectFill"
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
                  mode="aspectFill"
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
                  mode="aspectFill"
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
    <div class="down-btn">
      <div class="btn" @click="toList(3)">店铺申请</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import * as Helpers from './helpers'
// import API from '@/api'
// import Demo from './demo/demo'
  import AppPromise from '@utils/app-promise'

  const PAGE_NAME = 'OFFICAL_HOME'

  export default {
    name: PAGE_NAME,
    data() {
      return {
        showCover: false
      }
    },
    onShow() {
      AppPromise.getInstance().then(() => {
        if (this.$storage('userInfo').is_register) {
          // 静默授权 判断是商家直接跳领券首页
          if (!this.$storage('shopId')) {
            this.$storage('shopId', this.$storage('distributer').access_id)
          }
          uni.reLaunch({ url: `${this.$routes.mainHome}`})
        }
      })
    },
    methods: {
      showMenu() {
        this.showCover = true
      },
      hideCover() {
        this.showCover = false
      },
      toList(idx) {
        this.showCover = false
        switch (idx) {
        case 1:
          uni.navigateTo({ url: `${this.$routes.mainOfficialProduct}`})
          break
        case 2:
          uni.navigateTo({ url: `${this.$routes.mainOfficialScheme}`})
          break
        case 3:
          uni.navigateTo({ url: `${this.$routes.mainOfficialRelation}`})
          break
        }
      },
      toDetail(idx) {
        uni.navigateTo({ url: `${this.$routes.mainOfficialProdetail}?idx=${idx}`})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/*@import "~@design"*/

.line-box
  width: 100vw
  height: 10px
  background: #F9F9F9

.cover
  position: fixed
  left: -100vw
  top: 0
  transition: all .3s
  width: 100vw
  height: 100vh
  z-index: 1
  background: rgba(0,0,0,0.1)
  &.show
    left: 0
  .cover-box
    width: 100%
  .nav-item
    width: 100%
    height: 54px
    border-bottom: 0.5px solid #101428
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 15px
    box-sizing: border-box
    background: #1F2334
    .item-txt
      color: white
      font-size: 16px
    .item-icon
      width: 14px
      height: 14px

.offical-home
  width: 100%
  padding-bottom: 60px
  background: white

  .home-swiper
    width: 100vw
    height: 53.34vw
    overflow: hidden
    position: relative
    .menu-icon
      position: absolute
      width: 22px
      height: 20px
      padding: 5px
      top: 9px
      right: 7px
      .icon-img
        width: 22px
        height: 20px
    .item-img
      width: 100vw
      height: 56.34vw

  .home-content
    width: 100%
    box-sizing: border-box
    .nav-box
      display: flex
      align-items: center
      height: 80px
      border-radius: 2px
      background: white
      .nav-item
        flex: 1
        overflow: hidden
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        .nav-img
          width: 40px
          height: 40px
          border-radius: 50%
          margin-bottom: 6px
        .nav-txt
          font-size: 14px

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

.down-btn
  position: fixed
  left: 0
  bottom: 0
  width: 100vw
  height: 60px
  padding: 7px 10px
  background: white
  box-sizing: border-box
  box-shadow: 0 -1px 0 0 #E8EAEE
  .btn
    line-height: 44px
    text-align: center
    color: white
    background: #F54131
    border-radius: 44px

.test
  width: 100vw
</style>
