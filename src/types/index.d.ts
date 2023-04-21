declare interface Math {
  easeInOutQuad: Function
}
declare interface Window {
  mozRequestAnimationFrame: any
  onresize: () => void
}
declare interface Screen {
  left: number
  top: number
}
declare interface ParentNode {
  scrollTop: number
}

declare let $store: Store<AppStore>

type Component<T = any> =
  | ReturnType<typeof import('vue')['defineComponent']>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

interface Menu {
  url: string
  title: string
  icon?: string
  children?: Menu[]
}

interface RouteMeta {
  title: string
  hidden?: boolean
  affix?: boolean
}

interface Recordable {
  error: string
}

interface AppRouterRaw {
  path: string
  name: string
  meta: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouterRaw[]
  props?: Recordable
  icon?: string
  fullPath?: string
  beforeEnter?: () => string | boolean
}

interface Tag {
  path: string
  name: string
  title: string
  meta: RouteMeta
  fullPath: string
  query?: import('vue-router').LocationQuery
  params?: import('vue-router').RouteParams
}

interface Ws<T> {
  action: string
  data: T | any
}

interface PageSettings {
  pageSize: number,
  pageNumber: number,
  q?: string,
}


interface Pagination<T> {
  data: T[]
  pageNumber: number,
  pageSize: number,
  totalCount: number,
}