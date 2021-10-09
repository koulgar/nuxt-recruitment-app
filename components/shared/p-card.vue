<template>
  <div class="p-card" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.p-card {
  display: flex;
  position: relative;
  background: #ffffff;
  border: 1px solid $gray--placeholder;
  border-radius: 4px;
  padding: 10px;
}
</style>
