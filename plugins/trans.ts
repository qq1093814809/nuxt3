export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('trans', (el: HTMLElement) => {
    // 最大旋转角度 x,y
    const rotate = [-5, 5]
    const { width, height, x, y } = el.getBoundingClientRect()
    // 注册鼠标移入
    el.addEventListener('mousemove', (e: any) => {
      // 获取鼠标在元素内的位置
      const offsetX = e.clientX - x
      const offsetY = e.clientY - y
      // 根际当前鼠标的所在x,y的比例计算轴旋转角度
      const rotateX = (offsetX / width) * (rotate[1] - rotate[0]) + rotate[0]
      const rotateY = (offsetY / height) * (rotate[1] - rotate[0]) + rotate[0]
      // 设置样式
      el.style.setProperty('--x', `${rotateY}deg`)
      el.style.setProperty('--y', `${-rotateX}deg`)
      requestAnimationFrame(() => {})
    })
    // 注册鼠标移出
    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--x', '0deg')
      el.style.setProperty('--y', '0deg')
    })
  })
})
