<template>
    <!-- <pre>{{ props.data!.boards }}</pre> -->
    <!-- {{ props.data.group }} -->
    <!-- {{ props.data.boards }} -->
    <p class="gname">{{ props.data!.group.name }}</p>
    <ul class="group">
        <li v-for="(v, k) in props.data!.boards" v-bind:key="k"><router-link v-bind:to="{name: 'board', params:{boardid: v.id}}">{{ v.name }}</router-link></li>
    </ul>
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
    data: Object,
});
// console.log(props.data.group.name)
// console.log(props.data.boards[0].name)
</script>
