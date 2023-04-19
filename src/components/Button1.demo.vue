<i18n>
  常规用法
</i18n>
<template>
  <Button theme="primary">Primary Button</Button>
  <Button>Default Button</Button>
  <Button theme="dashed">Dashed Button</Button>
  <Button theme="text">Text Button</Button>
  <Button theme="link">Link Button</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>