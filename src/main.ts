import './initialize'
import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'

import router from './router'
import pinia from './pinia'

import 'element-ui/lib/theme-chalk/index.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import '@/styles/index.scss' // global css

Vue.use(Element, { size: 'small', zIndex: 3000 })

const app = new Vue({
  pinia,
  router,
  render: h => h(App),
}).$mount('#app')

export { app, router, pinia }
