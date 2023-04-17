<template>
  <div class="top_nav">
    <div class="logo">Simple UI</div>
    <ul>
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
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
</style>