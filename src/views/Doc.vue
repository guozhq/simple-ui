<template>
  <div class="layout">
    <TopNav />
    <aside v-if="asideVisible">
      <h1>组件列表</h1>
      <ul>
        <li>Switch组件</li>
        <li>Button组件</li>
        <li>DigLog组件</li>
        <li>Tags组件</li>
      </ul>
    </aside>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
import { inject, Ref } from 'vue'
export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return { asideVisible }
  }
}
</script>
<style lang="scss" scoped>
aside {
  background: black;
  width: 280px;
}
</style>
