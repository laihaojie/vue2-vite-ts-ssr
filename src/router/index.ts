import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
  },

  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true,
  },

  {
    path: '/',
    component: () => import('@/views/home/home.vue'),
    hidden: true,
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  // @ts-expect-error xxx
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  mode: 'history',
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  // @ts-expect-error xxx
  router.matcher = newRouter.matcher // reset router
}

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  !import.meta.env.SSR && NProgress.start()
  next()
  !import.meta.env.SSR && NProgress.done()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

export default router
