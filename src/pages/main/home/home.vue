<template>
  <div class="home">
    home
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'

  const PAGE_NAME = 'HOME'

  export default {
    name: PAGE_NAME,
    data() {
      return {
      }
    },
    computed: {
      // ...Helpers.homeComputed,
    },
    methods: {
      // ...Helpers.homeMethods,
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  .home
    min-height: 100vh
</style>