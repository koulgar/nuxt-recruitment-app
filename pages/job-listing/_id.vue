<template>
  <div class="detail">
    <div class="detail__content">
      <p-lazy-image
        class="detail__firm-logo"
        :src="detail.imageUrl"
        :alt="detail.companyName"
      />
      <detail-info-content :detail="detail" />
    </div>
    <p-line-behind-title class="detail__seperator" />
    <span>{{ detail.description }} </span>
    <p-map v-if="hasLocation" class="detail__map" :center="location" />
  </div>
</template>

<script>
import {
  jobListingModuleNamespace,
  FETCH_JOB_LIST_DETAIL,
  GET_JOB_LIST_DETAIL,
} from '@/constants/job-listing-store.constant';
import { mapGetters } from 'vuex';
import pLineBehindTitle from '@/components/shared/p-line-behind-title.vue';
import detailInfoContent from '@/components/detail-info-content';
import pMap from '@/components/p-map';
import pLazyImage from '../../components/shared/p-lazy-image.vue';

export default {
  components: {
    pMap,
    pLazyImage,
    detailInfoContent,
    pLineBehindTitle,
  },
  layout: 'main',
  async asyncData({ route, store, error: nuxtError }) {
    const { id } = route.params;
    try {
      await store.dispatch(
        jobListingModuleNamespace(FETCH_JOB_LIST_DETAIL),
        id
      );
    } catch (error) {
      nuxtError({
        statusCode: error?.response?.status || 500,
        errorObject: error,
      });
    }
  },
  head() {
    return {
      title: 'Puzzle | Detay',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "İş arıyorsan eksik parça Puzzle'da! | Detay",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      detail: jobListingModuleNamespace(GET_JOB_LIST_DETAIL),
    }),
    hasLocation() {
      return this.detail.hasLatitude && this.detail.hasLongitude;
    },
    location() {
      return [this.detail.latitude, this.detail.longitude];
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  padding: 20px;
  border: 1px solid $gray--placeholder;
  border-radius: 4px;
  &__content {
    display: flex;
    flex: auto;
    margin-bottom: 20px;
  }
  &__firm-logo {
    width: 150px;
    height: 150px;
    border: 1px solid $gray;
    border-radius: 4px;
    margin-right: 20px;
    object-fit: cover;
  }
  &__seperator {
    margin-bottom: 20px;
  }
  &__map {
    margin-top: 20px;
    height: 400px;
    border: 1px solid $gray--placeholder;
  }
}
</style>
