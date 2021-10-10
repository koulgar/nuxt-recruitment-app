<template>
  <div class="p-header">
    <div class="p-header__content">
      <nuxt-link class="p-header__logo" to="/">
        <p-logo dark />
      </nuxt-link>
      <section class="p-header__menu-item-list">
        <header-menu-item
          v-for="(menuItem, index) in menuItemList"
          :key="index"
          :to="menuItem.to"
          :title="menuItem.title"
          :icon="menuItem.icon"
        />
      </section>
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
          title: 'İş Ara',
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
    margin-right: 30px;
  }
  &__menu-item-list {
    display: flex;
    align-items: cemter;
  }
}
</style>
