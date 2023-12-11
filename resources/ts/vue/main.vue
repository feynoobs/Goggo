
<template>
  <p>World!{{ name }}</p>
  <input type="text" v-model="name">
</template>

<script setup lang="ts">
import { ref } from 'vue';
const name = ref('aaab');
</script>

<style lang="scss" scope>
</style>
