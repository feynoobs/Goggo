<template>
    <Header></Header>
    <ResponseList v-bind:data="data"></ResponseList>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
import { ref } from 'vue'

import Header from './item/Header.vue'
import ResponseList from './item/ResponseList.vue'
import http from '../http'

const props = defineProps({
    id: Number
});
console.log(props.id)
const data = ref<{value: any}>()

const params = new URLSearchParams()
params.append('id', (props.id ?? '').toString())
http
.post('/api/responses', params)
.then(res => {
    data.value = res.data
})
.catch(e => {
    console.error(e)
})

</script>
