<template>
  <div class="p-header">
    <div class="p-header__content">
      <p-logo class="p-header__logo" light />
    </div>
  </div>
</template>

<script>
import pLogo from './p-logo.vue';
export default {
  components: {
    pLogo,
  },
};
</script>

<style lang="scss" scoped>
.p-header {
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2),
    0 2px 8px 4px rgba(60, 64, 67, 0.1);
  &__content {
    display: flex;
    justify-content: flex-start;
    padding: 5px 20px;
    width: 100%;
    max-width: 1200px;
  }
}
</style>
