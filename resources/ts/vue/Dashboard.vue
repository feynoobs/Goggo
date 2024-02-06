<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { state } from '../state'
import { useRouter } from 'vue-router'

import Header from './item/Header.vue'
import Group from './item/Group.vue'

const router = useRouter();
const http = axios.create({
    baseURL: 'http://192.168.33.10',
    withCredentials: true,
})
const data = ref<Array<Object>>()

onMounted(() => {
    http.
    post('/api/boards', {responseType: 'json'})
    .then(res => {
        data.value = res.data
    })
})

function logout() : void {
    http
    .post('/api/logout')
    // APIが失敗してもログアウトする
    .then(res => {
        state().setLogout()
        router.push({name: 'login'})
        console.log(res)
    })
    .catch(e => {
        state().setLogout()
        router.push({name: 'login'})
        console.log(e)
    })
}
</script>



<template>
    <div class="wrap">
        <Header></Header>
        <Group v-bind:groups="data"></Group>
        <input type="button" class="btn" v-on:click="logout" value="ログアウト">
    </div>
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
