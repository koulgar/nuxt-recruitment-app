<template>
  <div>{{ jobList }}</div>
</template>

<script>
import {
  jobListingNamespace,
  FETCH_JOB_LIST,
  GET_JOB_LIST,
} from '@/constants/job-listing-store.constant';
import { mapGetters } from 'vuex';
export default {
  layout: 'main',
  async asyncData({ store }) {
    await store.dispatch(jobListingNamespace(FETCH_JOB_LIST));
  },
  computed: {
    ...mapGetters({
      jobList: jobListingNamespace(GET_JOB_LIST),
    }),
  },
};
</script>
