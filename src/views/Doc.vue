<template>
  <div class="layout">
    <TopNav class="top_nav" :toggleMenuButtonVisible="true" />
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
      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
  <div class="overlay" v-show="asideVisible && isLargeScreen" @click="toggleAside"></div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
import { inject, onMounted, onUnmounted, Ref, ref } from 'vue'
export default {
  components: { TopNav },
  setup() {
    const screenWidth = ref(window.innerWidth)
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const isLargeScreen = ref(false)
    const toggleAside = () => { asideVisible!.value = !asideVisible!.value }
    const handleResize = () => {
      screenWidth.value = window.innerWidth
      asideVisible!.value = screenWidth.value > 500
      isLargeScreen.value = screenWidth.value <= 500
    }
    onMounted(() => {
      window.addEventListener('resize', handleResize)
      isLargeScreen.value = screenWidth.value <= 500
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })
    return { asideVisible, toggleAside, isLargeScreen }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-wrap: wrap;
  background: #f5f8fa;

  .top_nav {
    color: #213547;
    background: #ffffff;
    box-shadow: 1px 1px 5px 1px #e7e7e7;
  }
}

aside {
  padding-top: 80px;
  background: #ffffff;
  width: 200px;
  min-height: 100vh;
  text-align: left;
  flex: 0 0 200px;
  position: fixed;
  z-index: 10;

  >h2 {
    margin-bottom: 4px;
    padding: 0 32px;
  }

  >ol {
    >li {
      a {
        display: block;
        padding: 4px 32px;
      }

      .router-link-active {
        background: #f4bf56;
        color: #ffffff;

      }
    }
  }
}

main {
  padding: 80px 24px 96px 24px;
  margin-left: 200px;
  flex: 1;
  width: 100%;

  .content {
    border-radius: 8px;
    min-height: 100vh;
    background: #fff;
    padding: 24px;
    box-shadow: 1px 1px 5px 1px #e7e7e7;
  }
}

@media (max-width:500px) {
  main {
    padding: 55px 0 0 0;
    margin: 0;
  }
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
