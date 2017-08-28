// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import VueQuillEditor from 'vue-quill-editor'


Vue.use(VueQuillEditor)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$ajax=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
