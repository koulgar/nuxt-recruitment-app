<template>
  <div class="default-layout">
    <p-header class="default-layout__header" />
    <div class="default-layout__content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import pHeader from '../components/shared/p-header';

export default {
  components: {
    pHeader,
  },
};
</script>
<style lang="scss" scoped>
.default-layout {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  background: #ffffff;
  &__header {
    width: 100%;
  }
  &__content {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    padding: 0 20px;
  }
}
</style>
