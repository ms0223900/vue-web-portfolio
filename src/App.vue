<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view/>
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
