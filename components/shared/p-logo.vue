<template>
  <section class="p-logo">
    <p-svg file="puzzle" :class="{ 'p-svg--light': light }" />
    <span class="p-logo__brand" :class="{ 'p-logo__brand--light': light }">
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
    light: {
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
  justify-content: center;
  &__brand {
    font-size: 32px;
    font-weight: bold;
    color: $brand-purple;
    &--light {
      color: #ffffff;
    }
  }
}
.p-svg {
  fill: $brand-purple;
  margin-right: 20px;
  &--light {
    fill: #ffffff;
  }
  &--puzzle {
    width: 50px;
    height: 50px;
  }
}
</style>
