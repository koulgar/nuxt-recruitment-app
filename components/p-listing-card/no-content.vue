<template>
  <div class="no-content">
    <p-svg file="warning" />
    <span class="no-content__text">
      Üzgünüz, aradığınız kriterlere uygun sonuç bulunamadı.
    </span>
    <p-button @click="clickHandler"> Geri Dön </p-button>
  </div>
</template>

<script>
import pButton from '../shared/p-button.vue';
import pSvg from '../shared/p-svg.vue';

export default {
  components: {
    pSvg,
    pButton,
  },
  methods: {
    clickHandler() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.no-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__text {
    margin-bottom: 20px;
    font-size: 24px;
    color: #434343;
  }
}
.p-svg {
  width: 50px;
  height: 50px;
  fill: $brand-purple;
}
</style>
