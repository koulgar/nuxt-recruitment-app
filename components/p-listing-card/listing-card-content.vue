<template>
  <section class="listing-card-content">
    <section class="listing-card-content__upper">
      <section class="listing-card-content__upper--left">
        <span
          class="listing-card-content__text listing-card-content__text--bold"
        >
          {{ jobItem.positionName }}
        </span>
        <span class="listing-card-content__text">
          {{ jobItem.companyName }}
        </span>
      </section>
      <section>
        <p-info-box v-if="hasLocationInfo" success>
          Harita Bilgisi Mevcut
        </p-info-box>
      </section>
    </section>
    <section class="listing-card-content__lower">
      <section class="listing-card-content__lower--left">
        <section class="listing-card-content__location">
          <p-svg file="location" />
          <span class="listing-card-content__text">
            {{ location }}
          </span>
        </section>
        <section class="listing-card-content__location">
          <p-svg file="near-me" />
          <span class="listing-card-content__text">
            {{ jobItem.distanceText }}
          </span>
        </section>
      </section>
      <section class="listing-card-content__lower--right">
        <span class="listing-card-content__text">
          {{ jobItem.durationDayText }}
        </span>
      </section>
    </section>
  </section>
</template>

<script>
import pSvg from '@/components/shared/p-svg.vue';
import pInfoBox from '@/components/p-info-box.vue';

export default {
  components: {
    pSvg,
    pInfoBox,
  },
  props: {
    jobItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    location() {
      return [this.jobItem.cityName, this.jobItem.townName].join(' | ');
    },
    hasLocationInfo() {
      return this.jobItem.latitude && this.jobItem.longitude;
    },
  },
};
</script>

<style lang="scss" scoped>
.listing-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
  &__upper,
  &__lower {
    display: flex;
    justify-content: space-between;
    &--left,
    &--right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &__lower {
    align-items: flex-end;
  }
  &__text {
    font-size: 14px;
    color: #434343;
    &--bold {
      font-weight: bold;
    }
  }
  &__location {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

.p-svg {
  width: 18px;
  height: 18px;
  fill: #434343;
}
</style>
