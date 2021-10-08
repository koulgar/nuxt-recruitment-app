<!-- eslint-disable vue/no-v-html -->
<template>
  <span
    class="p-svg"
    :class="'p-svg--' + file"
    v-on="$listeners"
    v-html="source"
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
      return require(`!!svg-inline-loader!~/assets/svg/${this.file}.svg`);
    },
  },
};
</script>
