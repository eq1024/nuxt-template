<script  lang="ts">
import { appName } from '~/constants'
export default {
  setup() {
    useHead({
      title: appName,
    })
    onMounted(() => {
      console.log('vue mounted')
    })
  },
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
