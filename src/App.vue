<script lang="ts" setup>
import { ref } from 'vue';

import JaView from './views/JaView.vue'
import EnView from './views/EnView.vue'
import ZhView from './views/ZhView.vue'
import KoView from './views/KoView.vue'
// const cur: number = 0;
const cur = ref<number>(0);
const onChange = (value: string) => {
    console.log(value)
}
</script>

<template>
    <div class="tab-wrap">
        <input name="lang" id="tab_ja" type="radio" class="tab-switch" checked>
        <router-link to="/"><label for="tab_ja" class="tab-label" v-on:click="cur=0" v-bind:class="{'tab-switch-active' : (cur === 0)}">日本語</label></router-link>
        <input name="lang" id="tab_en" type="radio" class="tab-switch">
        <router-link to="/en"><label for="tab_en" class="tab-label" v-on:click="cur=1" v-bind:class="{'tab-switch-active' : (cur === 1)}">英語</label></router-link>
        <input name="lang" id="tab_zh" type="radio" class="tab-switch">
        <router-link to="/zh"><label for="tab_zh" class="tab-label" v-on:click="cur=2" v-bind:class="{'tab-switch-active' : (cur === 2)}">中国語</label></router-link>
        <input name="lang" id="tab_ko" type="radio" class="tab-switch">
        <router-link to="/ko"><label for="tab_ko" class="tab-label" v-on:click="cur=3" v-bind:class="{'tab-switch-active' : (cur === 3)}">韓国語</label></router-link>
    </div>
    <div class="contents">
        <div v-show="cur === 0">
            <JaView v-on:change="onChange"></JaView>
        </div>
        <div v-show="cur === 1">
            <EnView></EnView>
        </div>
        <div v-show="cur === 2">
            <ZhView></ZhView>
        </div>
        <div v-show="cur === 3">
            <KoView></KoView>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tab-wrap {
    display: flex;
    flex-wrap: wrap;
}

.tab-label {
    display: inline-block;
    color: White;
    background: LightGray;
    width: 100px;
    margin-right: 5px;
    padding: 3px 12px;
    order: -1;
}

.tab-switch {
    display: none;
    &-active {
        background: DeepSkyBlue;
    }
}
</style>
