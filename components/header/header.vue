<template>
    <div class="box bg flex justify-center">
        <div class="w flex items-center justify-between">
            <div>
                <img src="~/assets/img/logo2.png" class="w-[240px]" alt="">
            </div>
            <div @click="change" class="item-content justify-around flex">
                <div data-value="0" :class="{ active: store.tab == 0 }">首页</div>
                <div data-value="1" :class="{ active: store.tab == 1 }">关于我们</div>
                <div data-value="2" :class="{ active: store.tab == 2 }">供应品类</div>
                <div data-value="3" :class="{ active: store.tab == 3 }">成功案例</div>
                <div data-value="4" :class="{ active: store.tab == 4 }">服务中心</div>
            </div>
            <div @click="goLogin" class="login">
                立即登录
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { pagesStore } from '@/stores/pages'
const store = pagesStore()
const router = useRouter()
const emit = defineEmits(['changeValue'])
const change = (e: any) => {
    const value = e.target.getAttribute('data-value')
    emit('changeValue', value)
    switch (value) {
        case "0":
            router.push('/')
            break;
        case "1":
            router.push('/about')
            break;
        case "2":
            router.push('/category')
            break;
        case "3":
            router.push('/success')
            break;
        case "4":
            router.push('/serve')
            break;
        default:
            router.push('/')
            break;
    }

}
const goLogin = () => {
    location.href = 'https://supply.leyg.cn/scm'
}
</script>

<style scoped lang="scss">
.box {
    width: 100vw;
}

.item-content {

    &>div {
        // flex: 1 1 0;
        cursor: pointer;
        height: 50px;
        width: 140px;
        line-height: 50px;
        text-align: center;

        &.active {
            color: #ff0000;
            font-size: 18px;
            font-weight: 500;
        }
    }

}

.login {
    cursor: pointer;
    width: 107px;
    height: 34px;
    background: #FF1616;
    color: #FFF;
    line-height: 34px;
    text-align: center;
    border-radius: 17px;
    font-size: 14px;
}
</style>