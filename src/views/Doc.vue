<template>
  <div class="layout">
    <TopNav />
    <aside v-if="asideVisible">
      <h1>组件列表</h1>
      <ul>
        <li><router-link to="/doc/switch">Switch组件</router-link></li>
        <li><router-link to="/doc/button">Button组件</router-link></li>
        <li><router-link to="/doc/Dialog">DigLog组件</router-link></li>
        <li><router-link to="/doc/tabs">Tags组件</router-link></li>
      </ul>
    </aside>
    <main>
      <router-view />
    </main>
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
.layout {
  display: flex;
  flex-wrap: wrap;
}

aside {
  background: #ccc;
  width: 280px;
  margin-right: 20px;
}
</style>
