<template>
  <section class="line-behind-title">
    <span v-if="title" class="line-behind-title__text">
      {{ title }}
    </span>
    <span class="line-behind-title__line" />
  </section>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.line-behind-title {
  display: flex;
  justify-content: center;
  position: relative;
  user-select: none;
  color: $gray;
  &__text {
    background: #ffffff;
    z-index: 10;
    font-size: 14px;
    color: $gray;
    padding: 0 10px;
  }
  &__line {
    width: 100%;
    position: absolute;
    border-top: 1px solid $gray--placeholder;
    top: 50%;
  }
}
</style>
