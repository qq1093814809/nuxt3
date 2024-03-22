<template>
    <div class="containers">
        <!-- <p>一些在所有页面之间共享的默认布局内容</p> -->
        <Header></Header>
        <div class="center">
            <slot />
        </div>
        <Footer></Footer>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
.containers {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .center {
        flex: 1;
    }
}
</style>