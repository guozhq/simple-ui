<template>
  <button class="simple-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="simple-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    danger: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props: { theme: any; size: any; danger: any; }) {
    const { theme, size, danger } = props;
    const classes = computed(() => {
      return {
        [`simple-theme-${theme}`]: theme,
        [`simple-size-${size}`]: size,
        [`simple-danger`]: danger,
      }
    });
    return { classes }
  }
}
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$blue: #4096ff;
$red: #ff4d4f;
$grey: #b8b8b8;
$disabled-background: #f5f5f5;

.simple-button {
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  border-radius: $radius;
  border: 1px solid $border-color;
  background: #fff;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  &+& {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  >.simple-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: simple-spin 1s infinite linear;
  }

  @keyframes simple-spin {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: $grey;
    border-color: $border-color;

    &:hover,
    &:focus {
      border-color: $border-color;
    }
  }

  &.simple-danger {
    color: $red;
    border-color: $red;

    &:hover,
    &:focus {
      color: lighten($red, 10%);
      border-color: lighten($red, 10%);
    }

    &[disabled] {
      color: $grey;
      border-color: $border-color;

      &:hover,
      &:focus {
        color: $grey;
        border-color: $border-color;
      }
    }
  }

  &.simple-theme-primary {
    background: $blue;
    color: #fff;
    border: none;

    &:hover,
    &:focus {
      color: #fff;
      border: none;
      background: lighten($blue, 10%)
    }

    &.simple-danger {
      background: $red;

      &:hover,
      &:focus {
        background: lighten($red, 10%)
      }
    }

    &[disabled] {
      background: $disabled-background;
      color: $grey;

      &:hover,
      &:focus {
        background: $disabled-background;
      }
    }
  }

  &.simple-theme-dashed {
    border-style: dashed;
  }

  &.simple-theme-text {
    border-color: transparent;
    box-shadow: none;

    &:hover,
    &:focus {
      background: darken(white, 5%)
    }

    &.simple-danger {
      color: $red;

      &:hover,
      &:focus {
        border-color: transparent;
        background: #fff2f0;
      }

      &[disabled] {
        color: $grey;
        border-color: transparent;

        &:hover,
        &:focus {
          color: $grey;
          background: none;
        }
      }
    }

    &[disabled] {
      color: $grey;
      border-color: transparent;

      &:hover,
      &:focus {
        color: $grey;
        background: none;
      }
    }
  }

  &.simple-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%)
    }

    &.simple-danger {
      color: $red;

      &:hover,
      &:focus {
        border-color: transparent;
        color: lighten($red, 10%);
      }

      &[disabled] {
        color: $grey;
        border-color: transparent;

        &:hover,
        &:focus {
          color: $grey;
          background: none;
        }
      }
    }

    &[disabled] {
      color: $grey;
      border-color: transparent;
      background: none;

      &:hover,
      &:focus {
        color: $grey;
        background: none;
      }
    }
  }

  &.simple-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.simple-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }
}
</style>