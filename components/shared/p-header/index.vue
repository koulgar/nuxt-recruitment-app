<template>
  <div class="p-header">
    <div class="p-header__content">
      <section class="p-header__content--left">
        <nuxt-link class="p-header__logo" to="/">
          <p-logo dark />
        </nuxt-link>
        <section class="p-header__menu-item-list">
          <header-menu-item to="/job-listing" title="İş Ara" icon="listing" />
        </section>
      </section>
      <p-input
        v-model="searchKey"
        placeholder="Pozisyon, firma adı, sektör"
        class="p-header__search-bar"
        icon="search"
        only-alphabetical
        title-case
        trim
      />
      <section class="p-header__content--right">
        <p-button> Giriş Yap </p-button>
        <p-button> Üye Ol </p-button>
      </section>
    </div>
  </div>
</template>

<script>
import pLogo from '@/components/shared/p-logo.vue';
import headerMenuItem from './menu-item.vue';
import pButton from '../p-button.vue';
import pInput from '../p-input.vue';

export default {
  components: {
    pLogo,
    pInput,
    pButton,
    headerMenuItem,
  },
  data() {
    return {
      searchKey: '',
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
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    width: 100%;
    max-width: 1200px;
    &--left {
      display: flex;
    }
    &--right {
      display: flex;
      align-items: center;
      :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  &__logo {
    align-self: flex-start;
    margin-right: 30px;
  }
  &__menu-item-list {
    display: flex;
    align-items: cemter;
  }
  &__search-bar {
    margin: 0 40px 0 30px;
  }
}
</style>
