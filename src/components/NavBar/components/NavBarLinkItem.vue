<template>
  <router-link :to="link">
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: 'NavBarLinkItem',
  props: {
    link: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style>

</style>
