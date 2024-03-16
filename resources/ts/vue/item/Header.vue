<template>
    <div class="center">
        <span class="inner">{{ title }}</span>
    </div>
</template>

<style lang="scss" scoped>
div.center {
    position: relative;
    height: 100px;
    text-align: center;
}
span.inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-weight:bold;
    font-size: xx-large;
}
</style>

<script setup lang="ts">
import { ref,watch } from 'vue';
import { Pinia } from '../../pinia'
const title = ref<String>()
watch(() => Pinia().title, (change: String) => {
    title.value = change
})
</script>
