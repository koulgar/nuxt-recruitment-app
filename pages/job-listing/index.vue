<template>
  <div class="job-listing">
    <template v-for="(job, index) in jobList">
      <nuxt-link :key="currentPage + index" :to="'/job-listing/' + job.id">
        <p-listing-card :job-item="job" class="job-listing__card" />
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import {
  jobListingModuleNamespace,
  GET_JOB_LIST_PAGE,
  FETCH_JOB_LIST,
  GET_JOB_LIST,
} from '@/constants/job-listing-store.constant';
import { mapGetters } from 'vuex';
import pListingCard from '../../components/p-listing-card/index.vue';

export default {
  components: {
    pListingCard,
  },
  layout: 'main',
  async asyncData({ store }) {
    await store.dispatch(jobListingModuleNamespace(FETCH_JOB_LIST));
  },
  computed: {
    ...mapGetters({
      jobList: jobListingModuleNamespace(GET_JOB_LIST),
      currentPage: jobListingModuleNamespace(GET_JOB_LIST_PAGE),
    }),
  },
};
</script>
<style lang="scss" scoped>
.job-listing {
  width: 100%;
  &__card {
    margin-bottom: 10px;
  }
}
</style>
