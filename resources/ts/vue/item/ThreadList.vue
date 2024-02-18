<template>
    <div class="inner_wrap" v-if="props.data !== undefined">
        <div class="gname">{{ props.data!.board.name }}</div>
        <dl class="thread">
            <template v-for="(v, k) in props.data!.threads">
                <dt>{{ k }}</dt>
                <dl>{{ v.name }}</dl>
            </template>
        </dl>
    </div>
</template>

<style lang="scss" scoped>
div.gname {
    font-size: 24px;
    color: #333;
    margin: 20px 0 10px 0;
}
li.link {
    line-height: 1.3;
    display: inline;
    text-decoration: underline;
    padding-right: 5px;
    color: #333;
}
li.link:hover {
    color: blue;
}
div.inner_wrap {
    margin: 20px 10%;
}
</style>

<script setup lang="ts">
const props = defineProps({
    data: Object,
});
</script>
