<template>
    <div>日本語</div>
    <div><span>なまえ</span><input type="text" v-model="name" v-on:change="onFire('name', name)"></div>
    <div><span>メアド</span><input type="email" v-model="email" v-on:change="onFire('email', email)"></div>
    <input type="button" v-on:click="onSubmit()" value="送信">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "JaView",
})
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Field, Lang } from '../data/Field'
import { useRouter } from 'vue-router'

const name = ref<string>('');
const email = ref<string>('');
const emits = defineEmits<{
    (e: 'fire', value: Field) : void
}>();
const onFire = (field: string, value: string) : void => {
    emits('fire', new Field(Lang.JA, field, value));
}

onMounted(() => {
    emits('fire', new Field(Lang.JA, 'name', ''))
    emits('fire', new Field(Lang.JA, 'email', ''))
});
useRouter().push('/confirm');
const r = useRouter();
function onSubmit() {
    r.push('/confirm');
    console.log('submit!!');
}

</script>
