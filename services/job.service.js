export default $http => ({
  fetchJobList() {
    return $http.get('/test/123');
  },
});
