<template>
  <div class="default-layout">
    <div class="default-layout__content">
      <p-logo />
      <nuxt />
    </div>
  </div>
</template>
<script>
import pLogo from '../components/shared/p-logo.vue';
export default {
  components: {
    pLogo,
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
  &__content {
    max-width: 1200px;
  }
}
</style>
