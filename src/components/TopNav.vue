<template>
  <div class="top_nav">
    <svg class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-tiger"></use>
      </svg>
      Simple UI
    </router-link>
    <ul>
      <li><router-link to="/doc/intro">文档</router-link></li>
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
  display: flex;
  width: 100%;
  max-height: 55px;
  justify-content: space-between;
  z-index: 11;
  position: fixed;
  color: #fff;
  padding: 16px;


  .logo {
    max-width: 7em;
    display: flex;
    align-items: center;


    >svg {
      color: #213547;
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
  }

  .menu {
    display: flex;

    li {
      margin: 0 1em;
    }
  }
}

.toggleAside {
  width: 24px;
  height: 24px;
  display: none;
}

@media (max-width:500px) {
  .logo {
    display: none;
  }

  .toggleAside {
    display: inline-block;
  }
}
</style>