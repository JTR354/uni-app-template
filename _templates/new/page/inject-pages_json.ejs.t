---
to: "src/pages.json"
inject: true
before: __package-<%= package[0]==='main'?'main':package[0].replace('package-', '')  %>__
---
<%_ if (package[0]==='main') { _%>
    {
     "path": "pages/<%= package[0] _%>/<%= name _%>/<%= name _%>",
      "style": {
         "navigationBarTitleText": "<%= title _%>"
      }
     },<%_ } else { _%>
        {
          "path": "<%= name _%>/<%= name _%>",
           "style": {
              "navigationBarTitleText": "<%= title _%>"
           }
        },<%_ } _%>