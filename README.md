![展示](https://pic-1300230199.cos.ap-guangzhou.myqcloud.com/NewPic/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230508175551.png)
# SSR项目模板
> 适用于期望SEO友好的，内容主导型网站，如:公司官网、外贸官网、个人博客等
### 技术站
NUXT3 + vite4 + pinia + typescript +eslint

### 目录结构

![目录](https://pic-1300230199.cos.ap-guangzhou.myqcloud.com/2023/202304231052644.png)

### 使用

1. 下载仓库

```shell
git clone https://github.com/eq1024/nuxt-template.git
```

2. 安装依赖

```shell
yarn -v 	// 1.22.22
node -v		// v20.12.0
yarn
```

3. 运行项目

```shell
yarn dev	//  > Local:    http://localhost:3000/ 
```

4. 打包项目

```shell
yarn build //输出在.nuxt项目
```

5. 部署项目

```shell
pm2 -v //5.4.3

pm2 start .\ecosystem.config.js

```

### 说明
!! 特别注意
CSS中引用缺失图片会触发`nuxt.config`中设置的默认语言强制覆盖cookie中存储的语言设置，导致再次访问`/`时语言重定向逻辑异常。具体表现为：当存在语言cookie时，缺失资源请求会提升`nuxt.config`中默认语言优先级使其超越cookie造成覆写问题，导致首页/路径跳过自动检测直接采用被覆盖的错误cookie值，造成语言显示错误。需确保资源引用有效或调整语言检测逻辑优先级来修复。


#### 环境变量的使用

**官方方法**

在[官方文档](https://nuxt.com.cn/docs/migration/runtime-config#runtime-config)中有使用说明，首先在`nuxt.config.ts`首层中添加如下内容，ts会自动补全

```ts
  runtimeConfig: {
    public: {
      BASE_URL: 'example url',
      test: 'test value',
    },
  },
```

然后再项目中使用

```ts
const config = useRuntimeConfig()
console.log('BASE_URL', config.public.BASE_URL)	 // example url
console.log('test', config.public.test)	 // test value
```

**dotenv使用**

在项目根目录创建 `.env.dev`和`.env.production`,然后修改package.json中的运行指令如下

```json
  "scripts": {
    "build": "nuxi build --dotenv .env.production",
    "dev": "nuxi dev --dotenv .env.dev"
  	}
```

添加如下字段到dotenv文件中

```json
// .env.dev
NUXT_BASE_ROOT = 'https://baidu.com'

//.env.production
NUXT_BASE_ROOT = 'https://bing.com'
```

在`nuxt.config.ts`首层中添加如下内容

```ts
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BASE_ROOT,
    },
  },
```

然后再项目中使用

```ts
const config = useRuntimeConfig()
console.log('BASE_URL', config.public.BASE_URL)	 //  https://baidu.com 或 https://bing.com
```

#### 请求封装

> 注意:针对首次请求完成的后续异步请求,NUXT3官方不推荐继续在nuxt项目中引入和使用axios,提倡使用NUXT3的$fetch

更多详细使用见NUXT3的原请求库[ofetch](https://github.com/unjs/ofetch)

```ts
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
    async onResponse({ request, response, options }) {
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
```

其他NUXT功能已提供示例,具体使用见官方[文档](https://nuxt.com/)



路由守卫

`/middleware`目录下已`.global.ts`结尾的函数将自动在全局路由时执行

```ts
// 文件名的 global 表示全局所以路由都会执行
export default defineNuxtRouteMiddleware((to, from) => {
  // const auth = useState('auth')
  console.log('全局触发路由 from:', from, ' to:', to,
  )
})
```

非`global`文件需要在组件中指定

```ts
definePageMeta({
  middleware: ['root-middle'], // 指定执行
})
```



