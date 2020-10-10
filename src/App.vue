<template>
  <div id="app" class="app-wrapper">
    <div id="nav">
      <NavBar />
    </div>
    <div class="row">
      <div class="col-12 col-md-3">
        <ProfilePart />
      </div>
      <div class="col-12 col-md-9">
        <router-view class="app-wrapper"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import ProfilePart from '@/components/Profile/ProfilePart.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    ProfilePart,
  },
};
</script>
<style scoped>
  .row {
    position: relative;
  }
  /* .row div:first-child {
    position: sticky;
    top: 0px
  } */
  .app-wrapper {
    padding: 16px;
    margin: auto;
    max-width: 1080px;
  }
</style>
