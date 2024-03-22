<template>
    <div>
        {{ text }}
    </div>
</template>

<script setup lang="ts">
const { text } = defineProps({
    text: String
})
</script>

<style scoped></style>