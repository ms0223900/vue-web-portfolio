<template>
  <div id="app" class="app-wrapper">
    <div id="nav">
      <NavBar />
    </div>
    <router-view class="app-wrapper"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>
<style>
  .app-wrapper {
    padding: 16px;
    margin: auto;
    max-width: 1080px;
  }
</style>
