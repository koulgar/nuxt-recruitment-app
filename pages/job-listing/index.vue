<template>
  <div class="job-listing">
    <div v-if="isJobListPresent">
      <template v-for="(job, index) in jobList">
        <nuxt-link :key="currentPage + index" :to="'/job-listing/' + job.id">
          <p-listing-card :job-item="job" class="job-listing__card" />
        </nuxt-link>
      </template>
      <p-pagination
        class="job-listing__pagination"
        :pages="pages"
        :current-page="currentPage"
        @pageChanged="pageChangeHandler"
      />
    </div>
    <no-content v-else />
  </div>
</template>

<script>
import {
  jobListingModuleNamespace,
  GET_JOB_LIST_PAGE,
  FETCH_JOB_LIST,
  GET_JOB_LIST,
  GET_JOB_LIST_PAGES,
} from '@/constants/job-listing-store.constant';
import { mapGetters, mapActions } from 'vuex';
import pListingCard from '@/components/p-listing-card/index.vue';
import noContent from '@/components/p-listing-card/no-content.vue';
import pPagination from '../../components/shared/p-pagination.vue';

export default {
  components: {
    noContent,
    pPagination,
    pListingCard,
  },
  layout: 'main',
  async asyncData({ store, route }) {
    const params = route.query;
    await store.dispatch(jobListingModuleNamespace(FETCH_JOB_LIST), params);
  },
  head() {
    return {
      title: 'Puzzle | Listeleme',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "İş arıyorsan eksik parça Puzzle'da! | Listeleme",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      jobList: jobListingModuleNamespace(GET_JOB_LIST),
      currentPage: jobListingModuleNamespace(GET_JOB_LIST_PAGE),
      pages: jobListingModuleNamespace(GET_JOB_LIST_PAGES),
    }),
    isJobListPresent() {
      return !!this.jobList.length;
    },
  },
  watch: {
    '$route.query.page'() {
      const query = this.$route.query;
      this.getJobList(query);
    },
  },
  methods: {
    ...mapActions({
      getJobList: jobListingModuleNamespace(FETCH_JOB_LIST),
    }),
    pageChangeHandler(clickedPage) {
      const query = this.$route.query;
      const path = this.$route.path;
      const pageQuery = clickedPage === 1 ? undefined : clickedPage;
      const newQuery = { ...query, page: pageQuery };
      this.$router.push({ path, query: newQuery });
    },
  },
};
</script>
<style lang="scss" scoped>
.job-listing {
  width: 100%;

  &__card {
    margin-bottom: 10px;
  }
  &__pagination {
    margin-top: 20px;
    justify-content: center;
  }
}
</style>
