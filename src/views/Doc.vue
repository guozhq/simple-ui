<template>
  <div class="layout">
    <TopNav />
    <aside>
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
export default {
  components: { TopNav }
}
</script>
