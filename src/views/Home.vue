<template>
  <div class="topnavAndBanner">
    <TopNav />
    <div class="banner">
      <h1>Simple UI</h1>
      <h2>一个简单的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/guozhq/simple-ui">Github</a>
        <router-link to="/doc/intro"> 开始 </router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格模式）</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的代码都及其简洁</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: { TopNav }
}
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #28d1c9;

.topnavAndBanner {
  background: rgb(72, 185, 255);
  background: linear-gradient(145deg, rgba(72, 185, 255, 1) 0%, rgba(72, 125, 255, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 145px 0;

  .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #eef2ff;
      color: #0d1832;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>