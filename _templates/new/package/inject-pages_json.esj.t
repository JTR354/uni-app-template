---
to: "src/pages.json"
inject: true
after: "subPackages"
---
    {
      "root": "pages/<%= packageName%>/",
      "pages": [
        {
          "path": "<%= name%>/<%= name%>",
          "style": {
            "navigationBarTitleText": "<%= title%>"
          }
        },
        "__<%= packageName%>__"
      ]
    },