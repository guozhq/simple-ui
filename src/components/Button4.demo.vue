<i18n>
  禁用按钮
</i18n>
<template>
  <div>
    <Button theme="primary" disabled>Primary Button</Button>
    <Button disabled>Default Button</Button>
    <Button theme="dashed" disabled>Dashed Button</Button>
    <Button theme="text" disabled>Text Button</Button>
    <Button theme="link" disabled>Link Button</Button>
  </div>
  <div>
    <Button theme="primary" danger disabled>Danger Primary</Button>
    <Button danger disabled>Danger Default</Button>
    <Button theme="dashed" danger disabled>Danger Dashed</Button>
    <Button theme="text" danger disabled>Danger Text</Button>
    <Button theme="link" danger disabled>Danger Link</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>