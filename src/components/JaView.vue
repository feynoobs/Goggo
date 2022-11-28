<template>
    <div>日本語</div>
    <div><input type="email" v-model="email" v-on:change="onFire('email', email)"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'JaView',
})
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Field, Lang } from '../data/Field';

const email = ref<string>('');
const emits = defineEmits<{
    (e: 'fire', value: Field) : void
}>();
const onFire = (field: string, value: string) : void => {
    emits('fire', new Field(Lang.JA, field, value));
}

onMounted(() => {
    emits('fire', new Field(Lang.JA, 'email', ''));
});
</script>
