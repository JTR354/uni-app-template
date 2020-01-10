<template>
  <div class="user-info">
    user-info
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'

  const PAGE_NAME = 'USER_INFO'

  export default {
    name: PAGE_NAME,
    components: {
    },
    data() {
      return {
      }
    },
    computed: {
      // ...Helpers.userInfoComputed,
    },
    methods: {
      // ...Helpers.userInfoMethods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .user-info
    min-height: 100vh
</style>
