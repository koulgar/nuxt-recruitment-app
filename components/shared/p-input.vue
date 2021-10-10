<template>
  <section class="p-input">
    <input
      data-test-input
      :value="value"
      :placeholder="placeholder"
      class="p-input__input"
      type="text"
      @input="inputHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    />
    <span v-if="icon" class="p-input__icon">
      <p-svg :class="{ 'p-svg--focused': isFocused }" :file="icon" />
    </span>
  </section>
</template>

<script>
import {
  onlyOneConsecutiveSpace,
  formatToTitleCase,
  onlyAlphabetical,
} from '@/utils/string.util';
import pSvg from './p-svg.vue';

export default {
  components: {
    pSvg,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    trim: {
      type: Boolean,
      default: false,
    },
    onlyAlphabetical: {
      type: Boolean,
      default: false,
    },
    titleCase: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFocused: false,
    };
  },
  methods: {
    inputHandler(event) {
      const target = event.target;
      target.value = this.formatValue(target.value);
      this.updateValue(target.value);
    },
    blurHandler() {
      this.isFocused = false;
      if (this.trim) return this.updateValue(this.value.trim());
      this.updateValue(this.value);
    },
    focusHandler() {
      this.isFocused = true;
    },
    formatValue(value) {
      let formattedValue = value;
      if (this.trim) {
        formattedValue = onlyOneConsecutiveSpace(formattedValue);
      }
      if (this.titleCase) {
        formattedValue = formatToTitleCase(formattedValue);
      }
      if (this.onlyAlphabetical) {
        formattedValue = onlyAlphabetical(formattedValue);
      }
      return formattedValue;
    },
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.p-input {
  display: flex;
  flex: auto;
  align-items: center;
  position: relative;
  &__input {
    width: 100%;
    padding: 5px 30px 5px 10px;
    height: 40px;
    border: 1px solid $gray;
    outline: none;
    border-radius: 4px;
    font-size: 14px;
    color: #434343;
    line-height: 1;
    &:focus {
      border-color: $brand-purple;
    }
  }
  &__icon {
    position: absolute;
    right: 10px;
    .p-svg {
      fill: $gray;
      width: 20px;
      height: 20px;
      &--focused {
        fill: $brand-purple;
      }
    }
  }
}
</style>
