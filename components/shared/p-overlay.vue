<template>
  <transition name="loading-overlay" appear>
    <div v-show="visible" class="loading-overlay">
      <template v-if="loading">
        <p-svg file="loading" />
        <p-logo dark />
        <slot />
      </template>
    </div>
  </transition>
</template>

<script>
import pLogo from './p-logo.vue';
import pSvg from './p-svg.vue';

export default {
  components: {
    pSvg,
    pLogo,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #ffffff;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.p-svg {
  width: 10%;
  height: 20%;
}
</style>
