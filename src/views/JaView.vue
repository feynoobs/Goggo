<template>
    <div>日本語</div>
    <div><input type="email" v-model="email" v-on:change="onChange(email)"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'JaView',
})
</script>

<script setup lang="ts">
import { ref } from 'vue';
const email = ref<string>('');
const emits = defineEmits<{
    (e: 'change', value: string) : void
}>();
const onChange = (value: string) : void => {
    emits('change', value);
}
</script>
