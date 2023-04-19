<i18n>
  一句话打开Dialog
</i18n>
<template>
  <Button @click="showDialog">toggle</Button>
</template>
<script lang="ts">
import { h } from 'vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '内容',
        ok() {
          return true;
        },
        cancel() {

        }
      })
    }
    return { showDialog }
  }
}
</script>
