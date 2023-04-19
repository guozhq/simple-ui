<template>
  <div class="simple-layout">
    <slot />
  </div>
</template>
<style lang="scss">
.simple-layout {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
}
</style>