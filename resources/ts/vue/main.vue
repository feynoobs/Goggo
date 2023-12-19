
<template>
    <p>World!{{ name }}</p>
    <input type="text" v-model="name">
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <input type="button" v-on:click="send">
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
})

const name = ref('');
const email = ref('');
const password = ref('');
function send() : void {
    http.get('/sanctum/csrf-cookie').then((res) => {
        http.post('/api/login', {email, password}).then((res) => {
            console.log(res)
        })
    })
}
</script>

<style lang="scss" scope>
</style>
