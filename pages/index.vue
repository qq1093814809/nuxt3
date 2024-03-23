<template>
    <div class="content-box">
        <video muted autoplay loop src="~/assets/bg.mp4"></video>
        <div class="glass-container">123</div>
    </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/user'
const store = userStore()
const { data, error, execute, pending, status } = await req({ url: 'Public_fun/login_password', data: { phone: "18251983962", password: 'liuminwei981017' } })
const changeValue = () => {
    store.name = '12312'
}


</script>

<style scoped>
.glass-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 245px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 13px;
    backdrop-filter: blur(30px);
    background-color: rgba(225, 102, 102, 0.142);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 0px rgba(255, 255, 255, 0.4) solid;
    border-bottom: 0px rgba(40, 40, 40, 0.35) solid;
    border-right: 0px rgba(40, 40, 40, 0.35) solid;
}

video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content-box {
    width: 100%;
    height: 100%;
    background-color: lightpink;
    mix-blend-mode: multiply;
}
</style>