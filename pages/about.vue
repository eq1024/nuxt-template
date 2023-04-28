<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
onMounted(() => {
  const commonJS = document.createElement('script')
  commonJS.src = '/js/common.js'
  document.body.append(commonJS)
})
onBeforeRouteLeave((to, from) => {
  console.log('组件内的守卫', to, from)
})
</script>

<template>
  <div>跳转成功 /about</div>
</template>

<style scoped>

</style>
