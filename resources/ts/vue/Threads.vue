<template>
    <div class="wrap">
        <Header></Header>
        <Thread v-bind:threads="data"></Thread>
    </div>
</template>



<style lang="scss" scoped>
</style>


<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Header from './item/Header.vue'
import Thread from './item/Thread.vue'

const props = defineProps({
    bbsid: Number,
});
console.log(props.bbsid)
const data = ref<Array<Object>>()

const http = axios.create({
    baseURL: 'http://192.168.33.10',
    withCredentials: true,
})

const params = new URLSearchParams()
params.append('bbsid', (props.bbsid ?? '').toString())
http.
post('/api/threads', params)
.then(res => {
    data.value = res.data
    console.log(res.data)
})
</script>
