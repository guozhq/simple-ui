<i18n>
  常规用法
</i18n>
<template>
  <Switch v-model:value="bool" />
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import { ref } from 'vue'
export default {
  components: { Switch },
  setup() {
    const bool = ref(true)
    return { bool }
  }
}
</script>
