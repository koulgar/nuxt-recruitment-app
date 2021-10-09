<template>
  <section class="p-logo">
    <p-svg file="puzzle" :class="{ 'p-svg--dark': dark }" />
    <span class="p-logo__brand" :class="{ 'p-logo__brand--dark': dark }">
      Puzzle
    </span>
  </section>
</template>

<script>
import pSvg from './p-svg.vue';
export default {
  components: {
    pSvg,
  },
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.p-logo {
  display: flex;
  align-items: center;
  user-select: none;
  &__brand {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
    &--dark {
      color: $brand-purple;
    }
  }
}
.p-svg {
  fill: #ffffff;
  margin-right: 20px;
  &--dark {
    fill: $brand-purple;
  }
  &--puzzle {
    width: 50px;
    height: 50px;
  }
}
</style>
