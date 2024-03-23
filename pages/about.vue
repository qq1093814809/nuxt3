<template>

    <div class="bg-slate-200">

        关于我们&nbsp; {{ store.name }}
        <NuxtLink to="/">go</NuxtLink>

    </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/user'
const store = userStore()
</script>

<style scoped></style>