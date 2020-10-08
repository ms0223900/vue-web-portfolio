<template>
  <div id="app">
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
    margin: auto;
    max-width: 1080px;
  }
</style>
