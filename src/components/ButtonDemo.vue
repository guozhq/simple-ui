<template>
  <h1>示例1</h1>
  <Button theme="primary">Primary Button</Button>
  <Button>Default Button</Button>
  <Button theme="dashed">Dashed Button</Button>
  <Button theme="text">Text Button</Button>
  <Button theme="link">Link Button</Button>
  <h1>示例2</h1>
  <Button theme="primary" size="small">Primary Button</Button>
  <Button size="small">Default Button</Button>
  <Button theme="dashed" size="small">Dashed Button</Button>
  <Button theme="text" size="small">Text Button</Button>
  <Button theme="link" size="small">Link Button</Button>
  <Button theme="primary" size="large">Primary Button</Button>
  <Button size="large">Default Button</Button>
  <Button theme="dashed" size="large">Dashed Button</Button>
  <Button theme="text" size="large">Text Button</Button>
  <Button theme="link" size="large">Link Button</Button>
  <h1>危险按钮</h1>
  <Button theme="primary" danger>Primary Button</Button>
  <Button danger>Default Button</Button>
  <Button theme="dashed" danger>Dashed Button</Button>
  <Button theme="text" danger>Text Button</Button>
  <Button theme="link" danger>Link Button</Button>
  <h1>禁用按钮</h1>
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
  <h1>支持显示加载中</h1>
  <Button loading>加载中</Button>
  <Button>加载完成</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>