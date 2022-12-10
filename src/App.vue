<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { Lang } from './data/Field'

const cur = ref<number>(0);
const meta: {[key: string]: string}[] = [
    {'title': '日本語', 'description': ''},
    {'title': '英語', 'description': ''},
    {'title': '中国語', 'description': ''},
    {'title': '韓国語', 'description': ''},
]

onMounted(() => {
    document.title = meta[0]['title']
});

watch(cur, (newer: Lang, older: Lang) => {
    older
    document.title = meta[newer]['title']
});

</script>

<template>
    <div class="tab-wrap">
        <input name="lang" id="tab_ja" type="radio" class="tab-switch" checked>
        <router-link to="/"><label for="tab_ja" class="tab-label" v-on:click="cur=Lang.JA" v-bind:class="{'tab-switch-active' : (cur === Lang.JA)}">日本語</label></router-link>
        <input name="lang" id="tab_en" type="radio" class="tab-switch">
        <router-link to="/en"><label for="tab_en" class="tab-label" v-on:click="cur=Lang.EN" v-bind:class="{'tab-switch-active' : (cur === Lang.EN)}">英語</label></router-link>
        <input name="lang" id="tab_zh" type="radio" class="tab-switch">
        <router-link to="/zh"><label for="tab_zh" class="tab-label" v-on:click="cur=Lang.ZH" v-bind:class="{'tab-switch-active' : (cur === Lang.ZH)}">中国語</label></router-link>
        <input name="lang" id="tab_ko" type="radio" class="tab-switch">
        <router-link to="/ko"><label for="tab_ko" class="tab-label" v-on:click="cur=Lang.KO" v-bind:class="{'tab-switch-active' : (cur === Lang.KO)}">韓国語</label></router-link>
    </div>
    <div class="contents">
        <router-view></router-view>
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
