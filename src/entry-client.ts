import { app, pinia, router } from './main'

// @ts-expect-error xxx
if (window.__INITIAL_STATE__) {
  // @ts-expect-error xxx
  pinia.state.value = JSON.parse(window.__INITIAL_STATE__)
}
// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  // actually mount to DOM
  app.$mount('#app')
})
