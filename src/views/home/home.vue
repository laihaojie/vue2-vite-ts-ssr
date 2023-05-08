<script setup lang="ts" name="home">
import { service } from 'lingman-web'
import { useUserStore } from '@/pinia'
import { Api } from '@/api'

const router = useRouter()

const userStore = useUserStore()
const res1 = ref(userStore.test)
const res2 = ref('')

async function loadDataOnServer() {
  const res = await getData() as string
  // res1.value = res
  userStore.setTest(res)
}
async function loadDataOnClient() {
  const res = await getData() as string
  res2.value = res
}

// 客户端渲染阶段调用 loadData
onMounted(() => {
  // loadDataOnServer()
  loadDataOnClient()
})

// 服务端渲染生命周期
onServerPrefetch(async () => {
  await loadDataOnServer()
  console.log('onServerPrefetch')
})

async function getData() {
  return Api.testGet()
}
</script>
<template>
  <div>
    服务端渲染：{{ res1 }}
    <br />
    客户端渲染：{{ res2 }}
    <br />
    222{{ userStore.token }}
    <el-button @click="router.push({ path: '/login' })">去登录</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
