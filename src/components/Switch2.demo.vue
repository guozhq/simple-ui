<i18n>
  支持Disabled
</i18n>
<template>
  <Switch v-model:value="bool" disabled />
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
