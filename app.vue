<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>
<script setup lang="ts">
// SEO
useHead({
  title: '刘民纬',
  meta: [
    { name: 'description', content: '刘民纬的个人博客' },
    { name: 'keywords', content: '博客,vue3,nuxt3,vite' },
    {
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover'
    }
  ]
})
</script>
<style lang="scss">
@import url('~/assets/css/reset.scss');

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
  transform: translateX(100%);
}
</style>