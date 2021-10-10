export const createJobService = context => {
  const jobApiGwClient = context.$apiClient.jobApiGwClient;
  return {
    fetchJobList() {
      return jobApiGwClient.get('/job');
    },
    fetchJobListDetail(jobId) {
      return jobApiGwClient.get(`/job/${jobId}`);
    },
  };
};
