<script setup lang="ts">
import { storeToRefs } from 'pinia'
// const router = useRouter()

const time1 = new Date().getTime()

const post1 = ref('')
const post2 = ref('')
const { userName } = storeToRefs(useUserStore())
interface post {
  userId: string
  id: string
  title: string
  body: string
}
useHead({
  title: userName,
})
definePageMeta({
  middleware: ['root-middle'],
})

/**
 * 在服务端的请求,渲染进html后一并返回
 */
const { data } = await useFetch<post>('https://jsonplaceholder.typicode.com/posts/5')
post1.value = JSON.stringify(data.value?.body) || ''
/**
 * 在客户的请求
 */
function getAsyncData() {
  useRequest<post>('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' }).then((res) => {
    post2.value = JSON.stringify(data.value?.body) || ''
  })
}

// .env的使用
const config = useRuntimeConfig()
const NUXT_BASE_ROOT = config.public.BASE_URL

const sphere: Ref<HTMLElement | null> = ref(null)
const a = ref(500)

onMounted(() => {
  console.log('时间2:', new Date().getTime())

  const commonJS = document.createElement('script')
  commonJS.src = '/js/common.js'
  document.body.append(commonJS)
  if (sphere !== null && sphere.value !== null) {
    const { init } = useSphere(sphere as Ref<HTMLElement>, a, a)
    init()
  }
})
</script>

<template>
  <div style="font-size: .2rem;">
    <div>时间1 : {{ time1 }}</div>
    <div class="fromSiv">
      <NuxtLinkLocale to="/admin">
        Admin(客户端渲染CSR)
      </NuxtLinkLocale>
      <div style="padding-bottom: 20px;">
        下面的异步请求内容是在服务端完成的
        {{ $t('kk') }}
      </div>
      <div>{{ post1 }}</div>
    </div>
    <div class="fromSiv bg-red">
      <div style="padding-bottom: 20px;">
        点击<button @click="getAsyncData">
          按钮
        </button>发送客户端的异步请求
      </div>
      <div>{{ post2 || '' }}</div>
    </div>
    <div class="fromSiv">
      <div>env的使用</div>
      <div>当前NUXT_BASE_ROOT为:</div>
      <div style="background-color: bisque;">
        {{ NUXT_BASE_ROOT }}
      </div>
    </div>
    <div class="fromSiv">
      <div>
        <input id="" v-model="userName" style="width: 600px;height: 50px; line-height: 50px;" type="text" name="">
      </div>
    </div>
    <div class="fromSiv">
      打开控制台,方便查看钩子函数的执行情况
    </div>
    <div ref="sphere" class="fixed top-0 left-0 w-full h-full" />
  </div>
</template>

<style lang="scss">
.fromSiv{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #222;
  border-radius: 5px;
  flex: 0 0 50vw;
  padding: 20px;
  margin:10px 100px;
}
</style>
