<template>
  <section class="p-logo">
    <p-svg file="puzzle" />
    <span class="p-logo__brand">Puzzle</span>
  </section>
</template>

<script>
import pSvg from './p-svg.vue';
export default {
  components: {
    pSvg,
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
  }
}
.p-svg {
  margin-right: 20px;
  &::v-deep svg {
    width: 50px;
    height: 50px;
    fill: $brand-purple;
  }
}
</style>
