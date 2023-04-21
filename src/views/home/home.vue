<script setup lang="ts" name="home">
import { useUserStore } from '@/pinia'

const router = useRouter()

const userStore = useUserStore()
</script>

<template>
  <div>
    222{{ userStore.token }}
    <el-button @click="router.push({ path: '/login' })">去登录</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
