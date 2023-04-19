<i18n>
  支持size
</i18n>
<template>
  <div>
    <Button theme="primary" size="large">Primary Button</Button>
    <Button theme="primary" size="normal">Primary Button</Button>
    <Button theme="primary" size="small">Primary Button</Button>
  </div>
  <div>
    <Button size="large">Default Button</Button>
    <Button size="normal">Default Button</Button>
    <Button size="small">Default Button</Button>
  </div>
  <div>
    <Button theme="dashed" size="large">Dashed Button</Button>
    <Button theme="dashed" size="normal">Dashed Button</Button>
    <Button theme="dashed" size="small">Dashed Button</Button>
  </div>
  <div>
    <Button theme="text" size="large">Text Button</Button>
    <Button theme="text" size="normal">Text Button</Button>
    <Button theme="text" size="small">Text Button</Button>
  </div>
  <div>
    <Button theme="link" size="large">Link Button</Button>
    <Button theme="link" size="normal">Link Button</Button>
    <Button theme="link" size="small">Link Button</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>
