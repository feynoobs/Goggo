<template>
    <div class="wrap">
        <Header v-bind:text-data="'fuga.jpg'"></Header>
        <input type="button" class="btn" v-on:click="logout" value="ログアウト">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import {state} from '../state'
import { useRouter } from 'vue-router'

import Header from './item/Header.vue'

const http = axios.create({
    baseURL: 'http://192.168.33.10',
    withCredentials: true,
})

const router = useRouter();

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

<style lang="scss" scope>
input.btn {
    display: block;
    margin: 20px auto;
    width: 160px;
    text-align: center;
    border: 1px solid #333;
}

</style>
