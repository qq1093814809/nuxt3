<template>
    <div class="box">
        头部{{ num }}
    </div>
</template>

<script setup lang="ts">
const num = ref(1)
</script>

<style scoped lang="scss">
.box {
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
}
</style>