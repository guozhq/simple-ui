<template>
  <div class="top_nav">
    <svg class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <div class="logo">Simple UI</div>
    <ul>
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
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

  @media (max-width:500px) {
    .logo {
      display: none;
    }

    .toggleAside {
      display: inline-block;
    }
  }
}
</style>