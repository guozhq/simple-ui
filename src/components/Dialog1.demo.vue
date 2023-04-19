<i18n>
  常规用法
</i18n>
<template>
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
</template>
<script lang="ts">
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {
      return
    }
    return { x, toggle, f1, f2, }
  }
}
</script>