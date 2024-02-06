<template>
    <div class="center">
        <span class="inner">掲示板にようこそ</span>
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
</script>
