<template>
  <div class="top_nav">
    <div class="logo">Simple UI</div>
    <ul>
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <div @click="toggleAside">logo</div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible!.value = !asideVisible!.value
    }
    return { toggleAside }
  }
}
</script>
<style lang="scss" scoped>
.top_nav {
  background: #ccccff;
  display: flex;
  max-width: 100%;
  padding: 16px;
  justify-content: space-between;

  .logo {
    max-width: 6em;
  }

  .menu {
    display: flex;

    li {
      margin: 0 1em;
    }
  }
}
</style>