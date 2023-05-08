import { cfg } from 'lingman-web'
import router from './router'
import { useUserStore } from '@/pinia'

cfg.getApiRoot = () => 'https://api.laihaojie.com'
cfg.getHttpHeader = () => {
  const userStore = useUserStore()
  return {
    token: userStore.token,
  }
}
cfg.makeLogout = () => {
  // 清除token
  const userStore = useUserStore()
  userStore.logout()
  router.push(`/login?url=${encodeURIComponent(window.location.href)}`)
}
cfg.showErrorToast = (msg: string) => Message.error(msg)
cfg.showInfoToast = (msg: string) => Message.info(msg)
