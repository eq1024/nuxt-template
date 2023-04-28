// 需要在组件中指定才能执行
export default defineNuxtRouteMiddleware((to, from) => {
  // const auth = useState('auth')
  console.log('只在/路径触发的路由 from:', from, ' to:', to,
  )
})
