<template>
  <div
    class="navbar-wrapper"
  >
    <div
      v-for="(link, i) in navbarLinkListData"
      :key="i"
    >
    <span>{{ i > 0 ? " | " : "" }}</span>
    <NavBarLinkItem
      :title="link.title"
      :link="link.link"
    />
    </div>
  </div>
</template>

<script>
import navbarLinkListData from '@/static/navbar-linkList';
import NavBarLinkItem from './components/NavBarLinkItem.vue';

export default {
  data() {
    return ({
      navbarLinkListData,
    });
  },
  components: {
    NavBarLinkItem,
  },
};
</script>

<style scoped>
  .navbar-wrapper {
    display: flex;
  }
</style>
