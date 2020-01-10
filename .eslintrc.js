// module.export = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     sourceType: 'script'
//   },
//   // required to lint *.vue files
//   plugins: ['vue', 'html'],
//   env: {
//     browser: false,
//     node: true,
//     es6: true
//   },
//   // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//   extends: 'standard',
//   'rules': {
//     // 允许箭头函数不使用圆括号
//     'arrow-parens': 0,
//     // 开发模式允许使用console
//     'no-console': 0,
//     // debugger使用
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
//     // allow async-await
//     'generator-star-spacing': 0,
//     'eol-last': 0,
//     'space-before-function-paren': 0,
//     // 不允许使用var变量
//     'no-var': 2,
//     // 不允许重复声明变量
//     'no-redeclare': [2, {builtinGlobals: true}]
//   },
//   globals: {
//     App: true,
//     Page: true,
//     wx: true,
//     swan: true,
//     tt: true,
//     my: true,
//     getApp: true,
//     getPage: true,
//     requirePlugin: true,
//     getCurrentPages: true
//   }
// }

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard'
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.PRE_COMMIT ? ['error', {allow: ['warn', 'error']}] : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-spaces-around-equal-signs-in-attribute': 0,
    'vue/script-indent': ['error', 2, {baseIndent: 1}],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'never'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 5,
          allowFirstLine: true
        }
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['src/**/*', 'tests/unit/**/*', 'tests/e2e/**/*'],
      excludedFiles: 'app.config.js',
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: {
        browser: true
      }
    },
    {
      files: ['**/*.unit.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: {jest: true},
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false
      }
    }
  ],
  globals: {
    App: true,
    Page: true,
    wx: true,
    uni: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    getCurrentPages: true
  }
}
