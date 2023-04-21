<script setup name="home">
const router = useRouter()
</script>

<template>
  <div>
    222
    <el-button @click="router.push({ path: '/login' })">去登录</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
