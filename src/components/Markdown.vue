<template>
  <component v-bind:is="content"></component>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {
    path: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const content = ref<String>()
    import(props.path).then(result => {
      content.value = result.default
    })
    console.log(content)
    return { content }
  }
};
</script>