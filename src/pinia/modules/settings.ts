import defaultSettings from '@/settings'

export const useSettingsStore = defineStore('settings', () => {
  const showSettings = ref(defaultSettings.showSettings)
  const fixedHeader = ref(defaultSettings.fixedHeader)
  const sidebarLogo = ref(defaultSettings.sidebarLogo)

  function changeSetting({ key, value }) {
    if (key === 'showSettings')
      showSettings.value = value

    else if (key === 'fixedHeader')
      fixedHeader.value = value

    else if (key === 'sidebarLogo')
      sidebarLogo.value = value
  }

  return {
    showSettings,
    fixedHeader,
    sidebarLogo,
    changeSetting,
  }
})
