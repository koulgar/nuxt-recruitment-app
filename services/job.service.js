export const createJobService = context => {
  const jobApiGwClient = context.$apiClient.jobApiGwClient;

  return {
    async findAll(params) {
      const jobListResponse = await jobApiGwClient.$get(`/job`, { params });
      jobListResponse.items.forEach(item => {
        this.transformJobResponse(item);
      });
      return jobListResponse;
    },
    async find(jobId) {
      const jobResponse = jobApiGwClient.$get(`/job/${jobId}`);
      this.transformJobResponse(jobResponse);
      return jobResponse;
    },
    transformJobResponse(data) {
      this.setDistanceText(data);
      this.setDurationDayText(data);
    },
    setDurationDayText(data) {
      const duration = data.durationDay;
      let text;
      switch (duration) {
        case 0:
          text = 'Bugün';
          break;
        case 1:
          text = 'Dün';
          break;
        default:
          text = `${duration} gün önce`;
          break;
      }
      data.durationDayText = text;
    },
    setDistanceText(data) {
      const dist = data.distance;
      const distInMeters = dist * 1000;
      data.distanceText =
        dist >= 1 ? `${dist} km yakınında` : `${distInMeters} m yakınında`;
    },
  };
};
