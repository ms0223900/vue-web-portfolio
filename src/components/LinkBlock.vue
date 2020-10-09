<template>
  <a
    v-show="!!href"
    :href="href"
    target="_blank"
  />
</template>

<script>
export default {
  name: 'LinkBlock',
  props: {
    href: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  a {
    position: absolute;
    z-index: 0;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
  }
</style>
