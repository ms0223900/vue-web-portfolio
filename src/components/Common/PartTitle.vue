<template>
  <header>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: 'PartTitle',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  h2 {
    text-align: center;
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 1.5rem;
    font-weight: lighter;
    // border-bottom: 2px solid var(--primary);
  }
</style>
