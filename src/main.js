import Vue from 'vue'
import App from './App.vue'
import '@/plugins'
import { BootstrapVue } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
