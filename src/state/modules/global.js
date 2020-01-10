// $discountStandard 标准折扣  $discountVersatile 全能折扣 $discountPartner 合伙人折扣价
export const state = {
  statusBarHeight: 20,
  $vw: 1,
  $systemInfo: {},
  $discountStandard: '',
  $discountVersatile: '',
  $discountPartner: '',
  $publishing: false
}

export const getters = {
  statusBarHeight: (state) => state.statusBarHeight,
  $vw: (state) => state.$vw,
  $systemInfo: (state) => state.$systemInfo,
  $discountStandard: (state) => state.$discountStandard,
  $discountVersatile: (state) => state.$discountVersatile,
  $discountPartner: (state) => state.$discountPartner,
  $publishing: (state) => state.$publishing
}

export const mutations = {
  SET_NAVIGATION_CONFIG(state, {statusBarHeight}) {
    state.statusBarHeight = statusBarHeight
  },
  SET_VW(state, vw) {
    state.$vw = vw
  },
  SET_SYSTEM_INFO(state, obj = {}) {
    state.$systemInfo = obj
  },
  SET_PUBLISHING(state, flag) {
    state.$publishing = !!flag
  }
}

export const actions = {}
