---
to: "src/pages/<%= h.inflection.dasherize(package[0]) %>/<%= h.inflection.dasherize(name) %>/modules/helpers.js"
---
// import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
//
// export const <%= h.changeCase.camelCase(name)%>Computed = {
//   ...mapGetters('<%= h.changeCase.camelCase(name)%>', [])
// }
// export const <%= h.changeCase.camelCase(name)%>Methods = {
//   ...mapActions('<%= h.changeCase.camelCase(name)%>', []),
//   ...mapMutations('<%= h.changeCase.camelCase(name)%>', [])
// }