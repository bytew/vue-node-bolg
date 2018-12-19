// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import post from './components/utils/post'

import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

Vue.config.productionTip = false
Vue.use(ElementUI);

window.$post = post;

Vue.prototype.$http = axios;






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
