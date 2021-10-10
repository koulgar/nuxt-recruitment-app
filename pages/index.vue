<template>
  <div class="homepage">
    <span class="homepage__title">Hoşgeldiniz</span>
    <section class="homepage__link">
      <p-svg file="github" />
      <a href="https://github.com/koulgar/nuxt-recruitment-app" target="_blank">
        Github
      </a>
    </section>
    <section class="homepage__link">
      <p-svg file="linkedin" />
      <a
        href="https://www.linkedin.com/in/do%C4%9Fucan-durmu%C5%9Flar-a7a8b215a/"
        target="_blank"
      >
        Linkedin
      </a>
    </section>
  </div>
</template>

<script>
import pSvg from '../components/shared/p-svg.vue';

export default {
  components: {
    pSvg,
  },
  layout: 'main',
  head() {
    return {
      title: 'Puzzle | Anasayfa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "İş arıyorsan eksik parça Puzzle'da! | Anasayfa",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 32px;
    color: #434343;
    margin-bottom: 30px;
  }
  &__link {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
.p-svg {
  margin-right: 10px;
  fill: $brand-purple;
  width: 20px;
  height: 20px;
}
</style>
