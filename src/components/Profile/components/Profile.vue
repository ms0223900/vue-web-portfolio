<template>
  <div>
    <div
      class="wrapper row"
    >
      <div class="col-3">
        <img
          alt="profile-img"
          :src="profileData.profileImgSrc"
        />
      </div>
      <div class="col-9">
        <h3>{{ profileData.name }}</h3>
        <h5>{{ profileData.nickName }}</h5>
      </div>
      <div>
        <h6>Email: </h6>
        <a :href="`mailto:${profileData.email}`">{{ profileData.email }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    profileData: {
      name: {
        type: String,
      },
      nickName: {
        type: String,
      },
      profileImgSrc: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 300px;
    padding-top: 40px;
    // text-align: center;
    // margin-top: 20px;
    // box-shadow: 0px 0px 10px #aaa;
    // border-right: 3px solid var(--primary);
    div:first-child {
      padding: 4px;
    }
    img {
      max-width: 100px;
      width: 100%;
      // width: 100px;
      // height: 100px;
      border-radius: 100%;
      overflow: hidden;
    }
  }
  .row {
    margin: auto;
  }
</style>
