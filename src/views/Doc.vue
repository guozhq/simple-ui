<template>
  <div class="layout">
    <TopNav />
    <aside v-if="asideVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li><router-link to="/doc/switch">Switch组件</router-link></li>
        <li><router-link to="/doc/button">Button组件</router-link></li>
        <li><router-link to="/doc/Dialog">DigLog组件</router-link></li>
        <li><router-link to="/doc/tabs">Tags组件</router-link></li>
        <li><router-link to="/doc/layout">Layout组件</router-link></li>
      </ol>
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
  padding-top: 70px;
  background: #ffffff;
  width: 200px;
  min-height: 100vh;
  text-align: left;
  flex: 0 0 200px;
  position: fixed;
  border-right: 1px solid #e7e7e7;

  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  >ol {
    >li {
      a {
        display: block;
        padding: 4px 16px;
      }

      .router-link-active {
        background: #f4bf56;
        color: #ffffff;

      }
    }
  }
}

main {
  padding: 64px 96px 96px 96px;
  margin-left: 200px;
  min-height: 120;
  flex: 1;
  width: 100%;
}
</style>
