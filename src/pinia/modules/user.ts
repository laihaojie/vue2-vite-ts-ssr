import { localGet, localRemove, localSet } from 'lingman-web'
import { skipHydrate } from 'pinia'
import { Api } from '../../api'
import { resetRouter } from '@/router'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>((!import.meta.env.SSR && localGet('token')) || '')
  const name = ref('')
  const avatar = ref('')
  const test = ref('')

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

  async function setTest(value: string){
    test.value = value 
  }

  return {
    token: skipHydrate(token),
    name: skipHydrate(name),
    avatar: skipHydrate(avatar),
    test,
    login,
    getInfo,
    logout,
    resetToken,
    setTest,
  }
})
