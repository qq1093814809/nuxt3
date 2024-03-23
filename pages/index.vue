<template>
    <div>
        {{ JSON.parse(data) }}
        <button class="flex" @click="changeValue">change</button>
        <NuxtLink to="/about">go</NuxtLink>
        {{ store.namePlus }}
    </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/user'
const store = userStore()
const { data, error, execute, pending, status } = await req({ url: 'Public_fun/login_password', data: { phone: "18251983962", code: "123", password: 'liuminwei981017' } })
const changeValue = () => {
    store.name = '1231231111121'
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
    background-color: inherit;
    mix-blend-mode: multiply;
}
</style>