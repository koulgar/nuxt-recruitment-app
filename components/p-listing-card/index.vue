<template>
  <p-card class="listing-card">
    <img class="listing-card__logo" :src="jobItem.imageUrl" />
    <listing-card-content :job-item="jobItem" />
  </p-card>
</template>

<script>
import pCard from '@/components/shared/p-card.vue';
import listingCardContent from './listing-card-content.vue';
export default {
  components: {
    pCard,
    listingCardContent,
  },
  props: {
    jobItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.listing-card {
  display: flex;
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 40%);
  }
  &__logo {
    border: 1px solid $gray--placeholder;
    border-radius: 4px;
    margin-right: 10px;
  }
}
</style>
