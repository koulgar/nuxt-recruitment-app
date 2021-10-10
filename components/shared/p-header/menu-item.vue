<template>
  <nuxt-link class="menu-item" :to="to">
    <p-svg class="menu-item__icon" :file="icon" />
    <span class="menu-item__title">{{ title }}</span>
  </nuxt-link>
</template>

<script>
import pSvg from '../p-svg.vue';

export default {
  components: {
    pSvg,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: $brand-purple;
  padding: 0 10px;
  transition: all 0.15s ease-in-out;
  background-color: #ffffff;
  &:not(:first-child) {
    margin-left: 10px;
  }
  &:hover {
    color: #ffffff;
    background-color: $brand-purple;
    border-radius: 4px;
  }
  &__icon {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
}
</style>
