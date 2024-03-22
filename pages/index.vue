<template>
    <div>
        {{ JSON.parse(data) }}
        <button @click="() => execute()">change</button>
        <NuxtLink to="/about">go</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { data, error, execute, pending, status } = await req({ url: 'Public_fun/login_password', data: { phone: "18251983962", code: "123", password: 'liuminwei981017' } })

const color = ref('blue')
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
    background-color: v-bind(color);
    mix-blend-mode: multiply;
}
</style>