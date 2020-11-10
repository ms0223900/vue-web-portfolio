<template>
  <div
    class="navbar-wrapper"
  >
    <div class="navbar-list">
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
    position: sticky;
    top: 0px;
    z-index: 100;
    background-color: var(--primary);
  }
  .navbar-list {
    display: flex;
    justify-content: flex-start;
    padding: 8px 0px;
    margin: auto;
    max-width: 1080px;
  }
</style>
