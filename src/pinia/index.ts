import { PiniaVuePlugin } from 'pinia'
import Vue from 'vue'

Vue.use(PiniaVuePlugin)

const pinia  = createPinia()

export default pinia
export * from './modules/settings'
export * from './modules/user'
export * from './modules/app'
