---
to: "src/utils/routes.js"
inject: true
after: "export default"
---
  <%= h.changeCase.camelCase(package[0]==='main'?'main-'+name: package[0].replace('package-', '') + '-' + name)%>: `/pages/<%= package[0]==='main'?'main': package[0]%>/<%= name %>/<%= name %>`,