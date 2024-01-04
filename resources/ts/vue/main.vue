
<template>
    <div class="wrap">
        <div class="inner">
            <ul>
                <li v-for="err in errs" v-bind:key="err">
                    {{ err }}
                </li>
            </ul>
           <dl>
                <dt class="pad border">メールアドレス</dt>
                <dd class="pad border">
                    <div class="item-wrap">
                        <input type="email" v-model="email">
                    </div>
                </dd>
            </dl>
            <dl>
                <dt class="pad border">パスワード</dt>
                <dd class="pad border">
                    <div class="item-wrap">
                        <input type="password" v-model="password">
                    </div>
                </dd>
            </dl>
            <input type="button" class="btn" v-on:click="send" value="ログイン">
        </div>
    </div>
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
const errs = ref<string[]>([]);

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

            errs.value.length = 0
            if (e.response.data.errors !== undefined) {
                if (e.response.data.errors.email !== undefined) {
                    e.response.data.errors.email.forEach((elem: string) => {
                        errs.value.push(elem)
                    })
                }
                if (e.response.data.errors.password !== undefined) {
                    e.response.data.errors.password.forEach((elem: string) => {
                        errs.value.push(elem)
                    })
                }
            }
        })
}
</script>

<style lang="scss" scope>
    div.wrap {
        width: 1280px;
        height: 1000px;
        margin: 0 auto;
        position: relative;
    }
    div.inner {
        width: 640px;
        height: 400px;
        margin: 0 auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
    dl {
        display: flex;
        flex-wrap: wrap;
        dt {
            width: 40%;
            &.pad {
                padding: 10px 20px 10px 20px;
            }
        }
        dd {
            width: 60%;
            &.pad {
                padding: 0 10px;
            }
        }
    }
    .border {
        border: 1px solid #333;
    }

    ul {
        list-style: disc;
        color: red;
    }

    input.btn {
        display: block;
        margin: 20px auto;
        width: 160px;
        text-align: center;
        border: 1px solid #333;
    }

    input[type="email"],
    input[type="password"] {
        display: inline-block;
        height: auto;
        width: 100%;
    }
    div.item-wrap {
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>
