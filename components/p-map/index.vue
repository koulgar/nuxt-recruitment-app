<template>
  <div class="p-map">
    <div id="mapId" ref="yandexMap" />
    <p-overlay :visible="!isReady" :loading="!isReady" />
  </div>
</template>

<script>
import ymaps from 'ymaps';
import pOverlay from '@/components/shared/p-overlay.vue';
export default {
  components: {
    pOverlay,
  },
  props: {
    center: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isReady: false,
      sdkError: false,
      yandexMapsSdk: null,
      mapInstance: null,
    };
  },
  mounted() {
    this.initializeYandexMaps();
  },
  methods: {
    async initializeYandexMaps() {
      try {
        this.isReady = false;
        this.yandexMapsSdk = await ymaps.load();
        this.mapInstance = new this.yandexMapsSdk.Map('mapId', {
          center: this.center,
          controls: [],
          zoom: 16,
        });
        this.createPlacemark();
      } catch (error) {
        this.sdkError = true;
      } finally {
        this.isReady = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.p-map {
  position: relative;
}
#mapId {
  height: 400px;
}
</style>
