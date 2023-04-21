import { PiniaVuePlugin } from 'pinia'
import Vue from 'vue'

Vue.use(PiniaVuePlugin)

export default createPinia()
export * from './modules/settings'
export * from './modules/user'
export * from './modules/app'
