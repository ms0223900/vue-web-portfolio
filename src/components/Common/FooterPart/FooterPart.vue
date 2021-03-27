<template>
  <div class="footer-wrapper" :style="footerStyles">
    <div class="container wrapper">
      <profile-item :profileData="profile" />
      <info-list />
    </div>
  </div>
</template>

<script>
import profile from '@/static/profile';
import InfoList from './InfoList.vue';
import ProfileItem from './ProfileItem.vue';

export default {
  name: 'FooterPart',
  data() {
    const footerStyles = {
      backgroundImage: `url(${'/assets/images/bg/bg-footer.png'})`,
    };
    return ({
      profile,
      footerStyles,
    });
  },
  components: {
    ProfileItem,
    InfoList,
  },
};

</script>

<style lang="scss" scoped>
  .footer-wrapper {
    // background: url('/assets/images/bg/bg-footer.png')
  }
  .container.wrapper {
    // position: relative;
    // top: 40px;
    display: block;
    align-items: center;
    min-height: 280px;
  }
  @media screen and (min-width: 400px) {
    .container.wrapper {
      display: flex;
    }
  }
</style>
