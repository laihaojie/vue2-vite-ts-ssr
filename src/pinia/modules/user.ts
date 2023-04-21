import { localGet, localRemove, localSet } from 'lingman-web'
import { Api } from '../../api/user'
import { resetRouter } from '@/router'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>(localGet('token') || '')
  const name = ref('')
  const avatar = ref('')

  async function login(userInfo) {
    const { username, password } = userInfo
    return Api.login({ account: username.trim(), password }).then((response) => {
      token.value = response as unknown as string
      localSet('token', response)
    })
  }

  function getInfo() {
    return Api.getUserInfo().then((response: UserInfo) => {
      if (!response)
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('Verification failed, please Login again.')

      name.value = response.nick_name
      avatar.value = response.avatar
      return response
    })
  }

  function logout() {
    localRemove('token')
    resetRouter()
    token.value = ''
  }

  async function resetToken() {
    localRemove('token')
    token.value = ''
  }

  return {
    token,
    name,
    avatar,
    login,
    getInfo,
    logout,
    resetToken,
  }
})
