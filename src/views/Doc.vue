<template>
  <div class="layout">
    <div class="top_nav">
      <div class="logo">PikaUI</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
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
}</style>