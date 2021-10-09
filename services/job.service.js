export default $http => ({
  fetchJobList() {
    return $http.get('/joblist');
  },
});
