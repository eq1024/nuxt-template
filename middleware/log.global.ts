// 文件名的 global 表示全局所以路由都会执行
export default defineNuxtRouteMiddleware((to, from) => {
  // const auth = useState('auth')
  console.log('全局触发路由 from:', from, ' to:', to,
  )
})
