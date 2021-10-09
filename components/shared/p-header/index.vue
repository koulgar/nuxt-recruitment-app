<template>
  <div class="p-header">
    <div class="p-header__content">
      <p-logo class="p-header__logo" dark />
      <template v-for="(menuItem, index) in menuItemList">
        <header-menu-item
          :key="index"
          :to="menuItem.to"
          :title="menuItem.title"
          :icon="menuItem.icon"
        />
      </template>
    </div>
  </div>
</template>

<script>
import pLogo from '@/components/shared/p-logo.vue';
import headerMenuItem from './menu-item.vue';
export default {
  components: {
    pLogo,
    headerMenuItem,
  },
  data() {
    return {
      menuItemList: [
        {
          title: 'Anasayfa',
          to: '/',
          icon: 'home',
        },
        {
          title: 'Listeleme',
          to: '/job-listing',
          icon: 'listing',
        },
      ],
    };
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
  &__logo {
    align-self: flex-start;
    flex: auto;
  }
}
</style>
