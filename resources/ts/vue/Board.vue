<script setup lang="ts">
import { ref } from 'vue'

import http from '../http'

const data = ref<{value: any}>()

http
.post('/api/threads')
.then(res => {
    data.value = res.data
})
.catch(e => {
    console.log(e)
})
</script>

<template>
    aaa
</template>

<style lang="scss" scoped>
input.btn {
    display: block;
    margin: 20px auto;
    width: 160px;
    text-align: center;
    border: 1px solid #333;
}
</style>
