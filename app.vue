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
  title: '蚂蚁聚服',
  meta: [
    { name: 'description', content: '蚂蚁聚服供应链' },
    { name: 'keywords', content: '蚂蚁聚服供应链,蚂蚁聚服,供应链,商城,电商,购物' },
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
@import url('~/assets/css/common.scss');

// .page-enter-active,
// .page-leave-active {
//   transition: all 0.4s;
// }

// .page-enter-from,
// .page-leave-to {
//   opacity: 0;
//   transform: translateX(100%);
// }</style>