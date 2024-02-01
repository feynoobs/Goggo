<template>
    <div class="center">
        <span class="inner">{{ textData }}</span>
    </div>
</template>

<style lang="scss" scope>
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
}
</style>

<script setup lang="ts">
const props = defineProps({
    textData: String
})
</script>
