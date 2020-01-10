---
to: "src/pages/<%= h.inflection.dasherize(packageName) %>/<%= h.inflection.dasherize(name) %>/<%= h.inflection.dasherize(name) %>.vue"
---
<template>
  <div class="<%= h.inflection.dasherize(name) %>">
    <%= h.inflection.dasherize(name) %>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'

  const PAGE_NAME = '<%=  h.inflection.dasherize(name).toUpperCase().replace(/-/g, '_')%>'

  export default {
    name: PAGE_NAME,
    components: {
    },
    data() {
      return {
      }
    },
    computed: {
      // ...Helpers.<%= h.changeCase.camelCase(name)%>Computed,
    },
    methods: {
      // ...Helpers.<%= h.changeCase.camelCase(name)%>Methods,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .<%= h.inflection.dasherize(name) %>
    min-height: 100vh
</style>
