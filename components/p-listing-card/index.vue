<template>
  <p-card class="listing-card">
    <p-lazy-image
      class="listing-card__logo"
      :src="jobItem.imageUrl"
      :alt="jobItem.companyName"
    />
    <listing-card-content :job-item="jobItem" />
  </p-card>
</template>

<script>
import pCard from '@/components/shared/p-card.vue';
import listingCardContent from './listing-card-content.vue';
import pLazyImage from '../shared/p-lazy-image.vue';
export default {
  components: {
    pCard,
    pLazyImage,
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
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid $gray--placeholder;
    border-radius: 4px;
    margin-right: 10px;
  }
}
</style>
