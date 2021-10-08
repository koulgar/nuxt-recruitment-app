<template>
  <div>test</div>
</template>

<script>
export default {
  layout: 'main',
  async asyncData({ $axios }) {
    const response = await $axios.get('/api/test/123');
    console.log(response.data);
  },
};
</script>
