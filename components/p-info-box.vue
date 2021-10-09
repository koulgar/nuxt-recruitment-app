<template>
  <span
    class="info-box"
    :class="[{ 'info-box--success': success }, { 'info-box--error': error }]"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  position: relative;
  padding: 1px 7px;
  border: 1px solid $gray;
  border-radius: 4px;
  color: $gray;
  font-size: 14px;
  &--success {
    color: $green--info;
    background-color: $green--info-background;
    border-color: $green--info;
  }
  &--error {
    color: $red--info;
    background-color: $red--info-background;
    border-color: $red--info;
  }
}
</style>
