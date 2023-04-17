<template>
  <div class="top_nav">
    <div class="logo">Simple UI</div>
    <ul>
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
  <div class="banner">
    <h1>Simple UI</h1>
    <h2>一个简单的UI框架</h2>
    <p class="actions">
      <a href="https://www.github.com">Github</a>
      <router-link to="/"> 开始 </router-link>
    </p>
  </div>
</template>
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