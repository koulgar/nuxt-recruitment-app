<template>
  <button
    class="p-button"
    :class="{ 'p-button--light': light }"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.p-button {
  display: flex;
  border: none;
  background-color: $brand-purple;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 15px;
  letter-spacing: 0.3px;
  border-radius: 4px;
  color: #ffffff;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: $brand-purple--light;
  }
  &[disabled] {
    background-color: $gray--disabled;
    opacity: 0.5;
    cursor: not-allowed;
  }
  &--light {
    background-color: #ffffff;
    border: 1px solid $brand-purple;
    color: $brand-purple;
    &:hover,
    &:focus,
    &:active {
      background-color: $brand-purple--placeholder;
    }
  }
}
</style>
