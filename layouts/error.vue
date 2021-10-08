<template>
  <div class="error-layout">
    <div class="error-layout__content">
      <p-logo class="error-layout__logo" />
      <span class="error-layout__error-message">
        {{ errorMessage }}
      </span>
      <p-button @click="clickHandler"> Anasayfa'ya Git </p-button>
    </div>
  </div>
</template>

<script>
import { parseLayoutErrorMessage } from '@/utils/layout-error-parser.util';
import pLogo from '../components/shared/p-logo.vue';
import pButton from '../components/shared/p-button.vue';

export default {
  components: {
    pLogo,
    pButton,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessage() {
      const { statusCode } = this.error;
      return parseLayoutErrorMessage(statusCode);
    },
  },
  methods: {
    clickHandler() {
      this.$router.push({ name: 'index' });
    },
  },
};
</script>

<style lang="scss" scoped>
.error-layout {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px;
    max-width: 800px;
  }
  &__logo {
    margin-bottom: 25px;
  }
  &__error-message {
    font-size: 22px;
    color: #434343;
    margin-bottom: 50px;
  }
}
</style>
