<i18n>
  禁用按钮
</i18n>
<template>
  <Button theme="primary" disabled>Primary Button</Button>
  <Button disabled>Default Button</Button>
  <Button theme="dashed" disabled>Dashed Button</Button>
  <Button theme="text" disabled>Text Button</Button>
  <Button theme="link" disabled>Link Button</Button>
  <Button theme="primary" danger disabled>Primary Button</Button>
  <Button danger disabled>Default Button</Button>
  <Button theme="dashed" danger disabled>Dashed Button</Button>
  <Button theme="text" danger disabled>Text Button</Button>
  <Button theme="link" danger disabled>Link Button</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>