import {mapGetters, mapActions, mapMutations} from 'vuex'

export const globalComputed = {
  ...mapGetters('global', [
    'statusBarHeight',
    '$vw',
    '$systemInfo',
    '$discountStandard',
    '$discountVersatile',
    '$discountPartner',
    '$publishing'
  ])
}

export const globalMethods = {
  ...mapMutations('global', ['SET_NAVIGATION_CONFIG', 'SET_VW', 'SET_SYSTEM_INFO', 'SET_PUBLISHING']),
  ...mapActions('global', ['getPriceTemplate'])
}
