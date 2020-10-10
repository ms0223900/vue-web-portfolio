<template>
  <Profile
    :profileData="profile"
  />
</template>

<script>
import profile from '@/static/profile';
import Profile from './components/Profile.vue';

export default {
  name: 'ProfilePart',
  data() {
    return ({
      profile,
    });
  },
  components: {
    Profile,
  },
};
</script>

<style>

</style>
