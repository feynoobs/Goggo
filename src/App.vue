<script lang="ts" setup>
import { ref } from 'vue'
const c = ref<Number>(0);
function tabclick(cur: Number)
{
    c.value = cur;
}
</script>

<template>
    <div class="tab-wrap">
        <input id="tab_ja" v-on:click="tabclick(0)" type="radio" class="tab-switch">
        <label for="tab_ja" class="tab-label"><router-link to="/">日本語</router-link></label>
        <input id="tab_en" type="radio" class="tab-switch">
        <label for="tab_en" class="tab-label"><router-link to="/en">英語</router-link></label>
        <input id="tab_zh" type="radio" class="tab-switch">
        <label for="tab_zh" class="tab-label"><router-link to="/zh">中国語</router-link></label>
        <input id="tab_ko" type="radio" class="tab-switch">
        <label for="tab_ko" class="tab-label"><router-link to="/zh">韓国語</router-link></label>
    </div>
</template>

<style scoped lang="scss">
.tab-wrap {
    display: flex;
    flex-wrap: wrap;
}

.tab-label {
    color: White;
    background: LightGray;
    margin-right: 5px;
    padding: 3px 12px;
    order: -1;
}

.tab-content {
    width: 100%;
    display: none;

}
.tab-switch {
    display: none;
}
</style>
