export const createJobService = context => {
  const jobApiGwClient = context.$apiClient.jobApiGwClient;
  return {
    fetchJobList(params) {
      return jobApiGwClient.get(`/job`, { params });
    },
    fetchJobListDetail(jobId) {
      return jobApiGwClient.get(`/job/${jobId}`);
    },
  };
};
