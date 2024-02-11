<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

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
params.append('bbsid', props.bbsid)
http.
post('/api/threads', params)
.then(res => {
    data.value = res.data
    console.log(res.data)
})


</script>

<template>
</template>

<style lang="scss" scoped>
</style>
