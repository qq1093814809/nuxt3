import type { AsyncDataRequestStatus } from '#app'
// 解决useFetch类型问题

export function isValidKey<T extends Object>(
  key: string | number | symbol,
  object: T
): key is keyof T {
  return key in object
}

export const req = ({
  url = '',
  method = 'post',
  data = {},
  params = {},
  options = { lazy: true }
}) => {
  const env = useAppConfig()

  return new Promise<{
    data: Ref<any>
    error: any
    execute: Function
    pending: Ref<boolean>
    status: Ref<AsyncDataRequestStatus>
  }>(async (resolve, reject) => {
    try {
      // 处理请求参数
      const fromData = new FormData()
      for (const key in data) {
        if (isValidKey(key, data)) fromData.append(key, data[key])
      }
      const header = useRequestHeaders()
      const {
        data: value,
        error,
        execute,
        pending,
        status
      } = await useFetch(url, {
        method: method as 'get' | 'post' | undefined,
        params,
        body: fromData,
        baseURL: env.durl,
        ...options,
        // 请求拦截
        onRequest: ({ request, options }) => {
          options.headers = options.headers || {
            Authorization: 'Bearer ' + env.token
          }
          console.log('请求拦截', request, options['headers'])
        },
        // 响应拦截
        onResponse: ({ request, options }) => {
          console.log('响应拦截', request, options)
        }
      })

      resolve({ data: value, error, execute, pending, status })
    } catch (error) {
      reject(error)
    }
  })
}