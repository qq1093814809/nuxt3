<template>
    <div class="containers">
        <!-- <p>一些在所有页面之间共享的默认布局内容</p> -->
        <Header @changeValue="changeValue"></Header>
        <div class="center">
            <slot />
        </div>
        <Footer></Footer>
    </div>
</template>
<script lang="ts" setup>
import { pagesStore } from '@/stores/pages'
const store = pagesStore()
const active = ref(0);
const changeValue = (value: number) => {
    store.tab = value
}
</script>
<style scoped lang="scss">
.containers {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .center {
        flex: 1;
    }
}
</style>