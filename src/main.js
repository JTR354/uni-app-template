import Vue from 'vue'
import App from './App'
import store from '@state/store'
import '@utils/app-plugins'
import '@utils/env-clear'
import '@api/index'
import '@api/http/handler'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
