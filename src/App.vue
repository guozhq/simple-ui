<template>
  <router-view />
</template>
<script lang="ts">
import { ref, provide } from 'vue'
export default {
  setup() {
    const screenWidth = document.documentElement.clientWidth;
    const asideVisible = ref(screenWidth > 500)
    provide('asideVisible', asideVisible)
  }
}
</script>