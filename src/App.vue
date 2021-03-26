<template>
  <div id="app">
    <NavBar />
    <div class="row app-wrapper">
      <!-- <div class="col-12 col-md-3">
        <ProfilePart />
      </div> -->
      <div class="col-12 col-md-12">
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
    // ProfilePart,
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
  #app {
    background-image: url('/assets/images/bg/bg-top.png');
    background-repeat: no-repeat;
    background-size: 100%;
    /* background-position: 0px -120px; */
  }
  .app-wrapper {
    padding: 0px;
    padding-top: 8px;
    /* padding-top: 0px; */
    margin: auto;
    /* max-width: 1080px; */
  }
  @media screen and (min-width: 600px) {
    .app-wrapper {
      padding: 16px;
    }
  }
</style>
