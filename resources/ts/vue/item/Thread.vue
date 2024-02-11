<template>
    <div class="container">
        <div class="group" v-for="(v1, k1) in props.threads" v-bind:key="k1">
            <p class="gname">{{ v1.thread.name }}</p>
            <ul v-for="(v2, k2) in v1.responses" v-bind:key="k2">
                <li><router-link v-bind:to="{ name: 'responses', params: {bbsid: v2.id} }">{{ v2.name }}</router-link></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
div.center {
    position: relative;
    height: 100px;
    text-align: center;
}
span.inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
</style>

<script setup lang="ts">
const props = defineProps({
    threads: Array<Object>,
});
</script>
