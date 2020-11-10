<template>
  <router-link
    :to="link"
    :class="['navbar-link', { active, }]"
  >
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
  computed: {
    active() {
      console.log(this.$route.path, this.link);
      return this.$route.path === this.link;
    },
  },
};
</script>
<style lang="scss">
  .navbar-link {
    padding: 8px;
    padding-bottom: 4px;
    // color: var(--primary);
    color: #fff;
    &:hover, &.active {
      font-weight: 800;
      color: #fff;
    }
    // &.active {
    //   font-weight: 800;
    //   color: #fff;
    //   // border-bottom: 2px solid var(--primary);
    // }
  }
</style>
