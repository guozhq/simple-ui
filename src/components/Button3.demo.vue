<i18n>
  危险按钮
</i18n>
<template>
  <Button theme="primary" danger>Primary Button</Button>
  <Button danger>Default Button</Button>
  <Button theme="dashed" danger>Dashed Button</Button>
  <Button theme="text" danger>Text Button</Button>
  <Button theme="link" danger>Link Button</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>