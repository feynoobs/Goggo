
<template>
    <dl>
        <dt>メールアドレス</dt>
        <dd>
            <div>
                <input type="email" v-model="email">
            </div>
            <div>
                <ul>
                    <li v-for="emil_errin in emil_errs">
                        {{ emil_errin }}
                    </li>
                </ul>
            </div>
        </dd>
        <dt>パスワード</dt>
        <dd><input type="password" v-model="password"></dd>
    </dl>
    <input type="button" v-on:click="send">
    <span>{{err}}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.33.10',
    withCredentials: true,
})
const email = ref<string>('');
const password = ref<string>('');
let err = ref<string>('');
let emil_errs = ref<string[]>([]);
function send() : void {
    http.get('/sanctum/csrf-cookie')
        .then(_ => {
            return http.post('/api/login', {email: email.value, password: password.value})
        })
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e.response)
            e.response.data.errors.email.forEach((elem: string) => {
                emil_errs.value.push(elem)
            })
        })
}
</script>

<style lang="scss" scope>
</style>
