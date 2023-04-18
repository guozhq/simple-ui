<template>
  Switch组件
  <h1>示例1</h1>
  <Switch v-model:value="bool" />
  <h2>支持Disabled</h2>
  <Switch v-model:value="bool" disabled />
</template>
<script lang='ts'>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: { Switch },
  setup() {
    const bool = ref(true)
    return { bool }
  }
}
</script>