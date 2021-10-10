<template>
  <div class="p-pagination">
    <p-button
      v-for="(page, index) in pages"
      :key="index"
      class="p-pagination__button"
      :light="page != currentPage"
      @click="clickHandler(page)"
    >
      {{ page }}
    </p-button>
  </div>
</template>
<script>
import pButton from './p-button.vue';

export default {
  components: {
    pButton,
  },
  props: {
    pages: {
      type: [String, Number],
      required: true,
    },
    currentPage: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    clickHandler(clickedPage) {
      this.$emit('pageChanged', clickedPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.p-pagination {
  display: flex;
  flex: auto;
  &__button {
    margin: 0 5px;
  }
}
</style>
