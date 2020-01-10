---
to: "src/utils/routes.js"
inject: true
after: "export default"
---
  <%= h.changeCase.camelCase(packageName==='main'?'main-'+name: packageName.replace('package-', '') + '-' + name)%>: `/pages/<%= packageName==='main'?'main': packageName %>/<%= name %>/<%= name %>`,