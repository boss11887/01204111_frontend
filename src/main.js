import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
export const bus = new Vue();
Vue.prototype.$APIURL = 'https://01204111-backend-22iqpu7n4-boss11887.vercel.app/api/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
