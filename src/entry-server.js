import { createRenderer } from 'vue-server-renderer'
import { app, pinia, router } from './main'

/**
 * Render by Server
 *
 * @param {import('vue-router').RawLocation} url - URL
 * @param {*} manifest - Manifest file.
 * @param {string} template - Template file.
 */
export function render(url, manifest, template) {
  return new Promise((resolve, reject) => {
    router.push(url).catch((err) => {
      if (err.name === 'NavigationDuplicated') {
        // 路由重复，忽略错误
        return
      }
      reject(err)
    })
    
    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes
      if (!matchedComponents.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 })
      }
      const renderer = createRenderer({
        manifest,
        template,
      })
      const context = {
        title: import.meta.env.VITE_APP_TITLE || 'Vue APP',
        meta: `<meta name="description" content="${import.meta.env.VITE_APP_DESCRIPTION
          }"/>`,
      }
      const state = JSON.stringify(pinia.state.value)

      return renderer
        .renderToString(app, context)
        .then((vueHtml) => {
          const html = vueHtml.replace('<!--pinia-state-->', state)
          return resolve(html)
        })
        .catch((err) => {
          console.error(err)
        })
    }, reject)
  })
}
