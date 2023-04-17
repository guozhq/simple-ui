<template>
  <TopNav />
  <div class="banner">
    <h1>Simple UI</h1>
    <h2>一个简单的UI框架</h2>
    <p class="actions">
      <a href="https://www.github.com">Github</a>
      <router-link to="/"> 开始 </router-link>
    </p>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: { TopNav }
}
</script>
<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background: rgba(94, 171, 127, 1);

  .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
    }
  }
}
</style>