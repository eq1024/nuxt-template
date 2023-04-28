<script setup lang="ts">
// const router = useRouter()
const post1 = ref('')
const post2 = ref('')

interface post {
  userId: string
  id: string
  title: string
  body: string
}

definePageMeta({
  middleware: ['root-middle'],
})

/**
 * 在服务端的请求,渲染进html后一并返回
 */
const { data } = await useFetch<post>('http://jsonplaceholder.typicode.com/posts/5')
post1.value = JSON.stringify(data.value?.body) || ''
/**
 * 在客户的请求
 */
function getAsyncData() {
  useRequest<post>('http://jsonplaceholder.typicode.com/posts/1', { method: 'GET' }).then((res) => {
    post2.value = JSON.stringify(data.value?.body) || ''
  })
}

// .env的使用
const config = useRuntimeConfig()
const NUXT_BASE_ROOT = config.public.BASE_URL

onMounted(() => {
  const commonJS = document.createElement('script')
  commonJS.src = '/js/common.js'
  document.body.append(commonJS)
})
</script>

<template>
  <div style="font-size: .2rem;">
    下面的异步请求内容是在服务端完成的
    <div>
      <code>{{ post1 }}</code>
    </div>

    <div>
      点击<button @click="getAsyncData">
        按钮
      </button>发送客户端的异步请求
    </div>
    <div>
      <code>{{ post2 || '' }}</code>
    </div>
    <div>env的使用</div>
    <div>当前NUXT_BASE_ROOT为: {{ NUXT_BASE_ROOT }}</div>
  </div>
</template>
