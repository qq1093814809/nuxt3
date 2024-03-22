// 全局路由拦截
// 文件名 .global 为全局拦截，不加为局部拦截
// 需要在页面中使用
/** 
 *
 *  definePageMeta({
      middleware: ["auth"]
    })
 * 
 */
export default defineNuxtRouteMiddleware((to, from) => {})
