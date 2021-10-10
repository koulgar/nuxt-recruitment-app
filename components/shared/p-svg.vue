<!-- eslint-disable vue/no-v-html -->
<template>
  <component
    :is="source"
    v-if="file"
    class="p-svg"
    :class="'p-svg--' + file"
    v-on="$listeners"
  />
</template>
<script>
export default {
  props: {
    file: {
      type: String,
      required: true,
    },
  },
  computed: {
    source() {
      return require(`@/assets/svg/${this.file}.svg?inline`);
    },
  },
};
</script>
