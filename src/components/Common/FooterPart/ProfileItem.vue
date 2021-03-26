<template>
  <div class="row wrapper">
    <div>
      <img
        alt="profile-img"
        :src="profileData.profileImgSrc"
      />
    </div>
    <div class="name-wrapper">
      <h3>{{ profileData.name }}</h3>
      <h5>{{ profileData.nickName }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileItem',
  props: {
    profileData: {
      profileImgSrc: String,
      name: String,
      nickName: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    min-width: 200px;
    width: 20%;
    img {
      // max-width: 60px;
      width: 60px;
      height: 60px;
      // width: 60%;
      // width: 100px;
      // height: 100px;
      border-radius: 100%;
      overflow: hidden;
    }
    .name-wrapper {
      flex-shrink: 0;
      padding-left: 8px;
    }
  }
</style>
