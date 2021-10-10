<template>
  <div class="detail-info">
    <section class="detail-info--upper">
      <section class="detail-info__content">
        <span class="detail-info__content--position">
          {{ detail.positionName }}
        </span>
        <span class="detail-info__content--company-name">
          {{ detail.companyName }}
        </span>
        <span> {{ detail.address }}</span>
      </section>
      <p-svg class="detail-info__country-flag" :file="detail.countryCode" />
    </section>
    <section class="detail-info--lower">
      <span class="detail-info__content--phone-number">
        <p-svg file="phone" />
        {{ contactPhone }}
      </span>
      <section class="detail-info__actions">
        <p-button light> Kaydet </p-button>
        <p-button> Başvur </p-button>
      </section>
    </section>
  </div>
</template>

<script>
import pSvg from '../../components/shared/p-svg.vue';
import pButton from '../../components/shared/p-button.vue';
export default {
  components: {
    pSvg,
    pButton,
  },
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  computed: {
    contactPhone() {
      const { countryCallingCode, areaCode, number } = this.detail.contactPhone;
      return `${countryCallingCode} (${areaCode}) ${number}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
  &--upper {
    display: flex;
    justify-content: space-between;
  }
  &--lower {
    display: flex;
    justify-content: space-between;
    :not(:last-child) {
      margin-right: 10px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #434343;
    &--position {
      font-size: 18px;
      font-weight: bold;
    }
    &--company-name {
      font-size: 16px;
    }
    &--phone-number {
      align-self: flex-end;
      font-size: 14px;
      color: #434343;
    }
  }
  &__country-flag {
    display: flex;
    align-self: flex-start;
    flex-shrink: 0;
    width: 50px;
    height: auto;
    border: 1px solid $gray--placeholder;
    margin-left: 20px;
  }
  &__actions {
    display: flex;
  }
}

.p-svg {
  &--phone {
    fill: $brand-purple;
    width: 18px;
    height: 18px;
  }
}
</style>
