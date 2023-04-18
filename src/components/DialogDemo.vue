<template>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible='x' :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>第一行</strong>
      <div>第二行</div>
    </template>
  </Dialog>
  <h1>一句话打开Dialog</h1>
  <Button @click="showDialog">toggle</Button>
</template>
<script lang="ts">
import { h, ref } from 'vue';
import Dialog from '../lib/Dialog.vue'
import { openDialog } from '../lib/openDialog'
import Button from '../lib/Button.vue'
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(true)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {
      return
    }
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
    return { x, toggle, f1, f2, showDialog }
  }
}
</script>