<template>
  <div v-if="visible" class="auth-confirm" :class="{'auth-confirm--active': show}">
    <article v-show="step === 1" class="content">
      <div class="link">
        <section class="link__header">
          <h1 class="link__title">恭喜您成为合作商家!</h1>
          <h2 class="link__title-sub">完成下方两步，即可获得佣金!</h2>
        </section>
        <section class="link__step">
          <ul class="step__line">
            <li class="step__line__dot active"></li>
            <li class="step__line__split"></li>
            <li class="step__line__dot"></li>
          </ul>
          <ul class="step__text">
            <div class="step__text__up">
              <p class="title" style="color: #222222;">复制淘口令</p>
              <p class="title-sub" style="color: #555555;">{{password}}</p>
            </div>
            <div class="step__text__down">打开淘宝，按指引完成授权</div>
          </ul>
        </section>
      </div>
      <div class="button__group">
        <span class="button button__right" @click="copyTaoCode">复制淘口令</span>
      </div>
    </article>
    <article v-show="step === 2" class="content">
      <div class="link">
        <section class="link__header">
          <h1 class="link__title">恭喜您成为合作商家!</h1>
          <h2 class="link__title-sub">完成下方两步，即可获得佣金!</h2>
        </section>
        <section class="link__step">
          <ul class="step__line">
            <li class="step__line__dot"></li>
            <li class="step__line__split"></li>
            <li class="step__line__dot active"></li>
          </ul>
          <ul class="step__text">
            <div class="step__text__up">
              <p class="title" style="color: #888888">复制淘口令</p>
              <p class="title-sub" style="color: #cccccc">{{password}}</p>
            </div>
            <div class="step__text__down step__text__down--active">打开淘宝，按指引完成授权</div>
          </ul>
        </section>
      </div>
      <div class="button__group">
        <span class="button button__left" @click="refuse">暂不授权</span>
        <span class="button button__right" @click="pass">已完成授权</span>
      </div>
    </article>
    <article v-show="step < 1" class="content">
      <div class="tip">
        <img src="./pic-sqsb.png" alt="" class="tip__icon">
        <p class="tip__text">系统检测到您授权失败！</p>
      </div>
      <div class="button__group">
        <span class="button button__left" @click="refuse">取消</span>
        <span class="button button__right" @click="passAgain">再次授权</span>
      </div>
    </article>
    <article v-show="step > 2" class="content">
      <div class="tip">
        <img src="./pic-sqcg.png" alt="" class="tip__icon">
        <p class="tip__text">授权成功！商品售卖后即获佣金</p>
      </div>
      <div class="button__group">
        <span class="button button__right" @click="close">我知道了</span>
      </div>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import API from '@api'

  const COMPONENT_NAME = 'AUTH_CONFIRM'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        show: false,
        step: 1,
        password: '',
        visible: true
      }
    },
    created() {
      this._$$init()
    },
    beforeDestroy() {
      this.show = false
      this.step = 1
      this.password = ''
      this.visible = false
    },
    methods: {
      _$$init() {
        if (this.$storage('userInfo').is_register !== 1) {
          this.visible = false
          return
        }
        this._checkAuth((res) => {
          this.show = res.data.bind_relation === 0
          this.visible = this.show
        })
        this._getCode()
      },
      _checkAuth(cb, loading) {
        API.Taobao.checkIsAuth({loading}).then(res => {
          typeof cb === 'function' && cb(res)
        })
      },
      _getCode(cb, loading) {
        API.Taobao.getCode({loading}).then(res => {
          this.password = res.data.password
          typeof cb === 'function' && cb(res)
        })
      },
      copyTaoCode() {
        if (!this.password) {
          this._getCode(this._copy)
        } else {
          this._copy()
        }
      },
      _copy() {
        try {
          this.$wechat.setClipboardData(this.password)
          this.step++
        } catch (e) {
          this.$wechat.showToast('复制失败请重新尝试')
        }
      },
      refuse() {
        // wx.navigateBack()
        this.close()
      },
      pass() {
        this._checkAuth((res) => {
          if (res.data.bind_relation === 0) {
            this.step = 0
          } else {
            this.step++
          }
        }, true)
      },
      passAgain() {
        this.step++
      },
      close() {
        this.show = false
        setTimeout(() => {
          this.visible = false
          this.step = 1
          this.password = ''
        }, 300)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.auth-confirm
  position :fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  z-index :120
  background: rgba(34,34,34,0.8)
  opacity: 0
  transition: opacity 0.3s ease-in-out
  display :flex
  align-items :center
  justify-content :center
.auth-confirm--active
  opacity : 1

.content
  background: #FFFFFF
  border-radius: 6px
  width :280px
  margin-top :-10vw
  font-family: $font-family-regular
  line-height: 1

.tip__icon
  width: 65px
  height: 65px
  display: block
  margin : 25.5px auto 0
.tip__text
  font-size: 16px
  color: #222222
  text-align: center
  padding :6px 0 27.5px

.link__header
  background-image: linear-gradient(-46deg, #FF5704 0%, #FF8600 100%)
  border-radius: 6px 6px 0 0;
.link__title
  font-family: $font-family-medium
  font-size: 17px
  color: #FFFFFF
  text-align :center
  padding-top :16px
.link__title-sub
  text-align :center
  font-size: 13px
  color: rgba(255,255,255,0.8)
  padding :7px 0 15px
.link__step
  padding :22px 30px 23px
  display :flex
.step__text
  padding :0 7px
  background :#fff
  flex: 1
.step__text__up
  .title
    font-size: 15px
    color: #222222
  .title-sub
    padding-top :6px
    font-size: 12px
    color: #555555
    &.title-sub--active
      color: #222222
.step__text__down
  padding-top :21px
  font-size: 15px
  color: #888888
  &.step__text__down--active
    color: #222222
.step__line__dot
  width: 14px
  height: @width
  border-radius :50%
  display :flex
  align-items :center
  justify-content :center
  background :transparent
  &.active
    background :rgba(245,65,49,0.2)
    &:after
      content : ''
      width: 7px
      height: @width
      border-radius :50%
      background :rgba(245,65,49,0.9)
  &:after
    content : ''
    width: 7px
    height: @width
    border-radius :50%
    background :#ccc
.step__line__split
  height: 33px
  width: 1px
  background :#ccc
  margin : 3px auto

.button__group
  border-top-1px()
  display :flex
.button
  flex: 1
  height: 40px
  font-size: 15px
  text-align: center
  line-height: @height

.button__left
  color: #888888
  border-right-1px()
.button__right
  color: #F54131
</style>
