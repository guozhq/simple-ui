<template>
  <button class="simple-switch" @click="toggle" :class="{ 'simple-checked': value }"><span></span></button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }

}
</script>
<style lang="scss">
@use "sass:math";
$h: 24px;
$h2: $h - 4px;

.simple-switch {
  background: #ccc;
  width: $h * 2;
  height: $h;
  position: relative;
  border: none;
  border-radius: math.div($h, 2);

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    background: #ffffff;
    width: $h2;
    height: $h2;
    border-radius: math.div($h2, 2);
    transition: 250ms;
  }

  &.simple-checked {
    background: #1677ff;
  }
}

button.simple-checked>span {
  left: calc(100% - $h2 - 2px);
}
</style>