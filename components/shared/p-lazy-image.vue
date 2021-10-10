<template>
  <img
    class="p-lazy-image"
    :src="imageSource"
    :alt="alt"
    @error="imageErrorHandler"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
      required: false,
    },
    placeholderImage: {
      type: String,
      default: '/image/loading.svg',
    },
    errorImage: {
      type: String,
      default: '/image/placeholder-image.jpeg',
    },
    preload: {
      type: Boolean,
      default: false,
    },
    passive: {
      type: Boolean,
      default: false,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isNativeLazyLoadSupported: false,
      hasError: false,
    };
  },
  head() {
    if (!this.preload) return {};
    return {
      link: [
        {
          rel: 'preload',
          as: 'image',
          hid: this.src,
          href: this.src,
        },
      ],
    };
  },
  computed: {
    imageSource() {
      if (this.hasError || !this.src) {
        return this.errorImage;
      }
      if (this.passive || this.isNativeLazyLoadSupported) {
        return this.src || this.errorImage;
      }
      return this.placeholderImage;
    },
  },
  mounted() {
    this.initHybridLazyLoad();
  },
  methods: {
    initHybridLazyLoad() {
      if (this.passive) return;
      this.isNativeLazyLoadSupported = 'loading' in HTMLImageElement.prototype;
      if (this.isNativeLazyLoadSupported) {
        this.$el.setAttribute('loading', 'lazy');
      } else {
        this.loadOriginalImageSource();
      }
    },
    loadOriginalImageSource() {
      const newImage = new Image();
      newImage.onload = () => {
        this.$emit('loaded', true);
        newImage.remove();
      };
      newImage.onerror = () => {
        this.hasError = true;
        this.$emit('failed', true);
        newImage.remove();
      };
      newImage.src = this.src || this.errorImage;
    },
    imageErrorHandler() {
      this.hasError = true;
    },
  },
};
</script>
