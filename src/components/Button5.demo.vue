<i18n>
  支持显示加载中
</i18n>
<template>
  <Button loading></Button>
  <Button loading>加载中</Button>
  <Button>加载完成</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>