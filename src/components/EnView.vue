<template>
    <div>英語</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'EnView',
})
</script>

<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    document.title = '英語ページ'
});
</script>
