import { localGet, localSet } from 'lingman-web'

export const useAppStore = defineStore('app', () => {
  const sidebar = ref({
    opened: !localGet('sidebarStatus'),
    withoutAnimation: false,
  })
  const device = ref('desktop')

  function toggleSideBar() {
    sidebar.value.opened = !sidebar.value.opened
    sidebar.value.withoutAnimation = false
    if (sidebar.value.opened)
      localSet('sidebarStatus', 0)

    else
      localSet('sidebarStatus', 1)
  }

  function closeSideBar({ withoutAnimation }) {
    localSet('sidebarStatus', 1)
    sidebar.value.opened = false
    sidebar.value.withoutAnimation = withoutAnimation
  }

  function toggleDevice(device) {
    device.value = device
  }

  return {
    sidebar,
    device,
    toggleSideBar,
    closeSideBar,
    toggleDevice,
  }
})
