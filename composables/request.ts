type fetchType = typeof $fetch
type ReqType = Parameters<fetchType>[0]
type FetchOptions = Parameters<fetchType>[1]
type BodyType = RequestInit['body']

export function useRequest<T = unknown>(
  request: ReqType,
  opt: FetchOptions,
  body?: BodyType,
) {
  // const router = useRouter()
  // const route = useRoute()
  const config = useRuntimeConfig()
  const token = useCookie('token')
  const defaultopt = {
    method: 'post',
    baseUrl: config.public.BASE_URL,
    Headers: { token: token.value },
    body,
    onResponseError({ response }) {
      console.log('cuowu', response)
    },
    async onResponse({ request, response }) {
      // Log response
      console.log('[请求返回]', request, response.status, response.body)
    },
    async onRequest({ request, options }) {
      // Log request
      console.log('[发送请求]', request, options)
      options.query = options.query || {}
      options.query.t = new Date()
    },
  } as FetchOptions
  return $fetch<T>(request, useMerge(defaultopt, opt))
}
