<template>
  <frame-wrapper
    :wrapperStyles="wrapperStyles"
  >
    <div
      class="project-item-wrapper"
    >
      <a :href="singleProjectData.link" target="_blank">
        <div class="img-wrapper">
          <img
            :alt="singleProjectData.title"
            :src="singleProjectData.imgSrc"
          />
        </div>
      </a>

      <div
        class="row intro-wrapper"
      >
        <div class="col-12">
          <div class="title-wrapper">
            <h3>{{ singleProjectData.title }}</h3>
            <button class="frame-style-button outlined">查看細節</button>
          </div>
          <p>{{ singleProjectData.intro }}</p>
        </div>
      </div>
    </div>
  </frame-wrapper>
</template>

<script>
import FrameWrapper from '../FrameWrapper.vue';

export default {
  name: 'ProjectItem',
  props: {
    singleProjectData: {
      title: {
        type: String,
      },
      imgSrc: {
        type: String,
      },
      intro: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  },
  data() {
    return ({
      wrapperStyles: {
        maxWidth: '800px',
        height: '90%',
        margin: 'auto',
      },
    });
  },
  components: { FrameWrapper },
};
</script>

<style lang="scss" scoped>
  .project-item-wrapper {
    position: relative;
    // padding: 16px;
    padding: 4px;
    // background-color: #eee;
    h3 {
      // margin: 4px;
      padding-bottom: 8px;
      // background-color: #fff;
      // background-color: var(--primary);
      color: #fff;
      color: var(--primary);
      border-radius: 4px;
      font-weight: lighter;
      // border-bottom: 1px solid var(--primary);
      // font-size: 1.1rem;
    }
    .title-wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .intro-wrapper {
      padding: 4px;
      padding-top: 8px;
      align-items: flex-start;
      justify-content: space-around;
    }
    .img-wrapper {
      position: relative;
      border-radius: 4px;
      // max-height: 320px;
      height: 0px;
      padding: 25%;
      overflow: hidden;
      &:hover {
        opacity: 0.9;
      }
      img {
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
    img {
      width: 100%;
    }
    p {
      color: #333;
    }
  }
</style>
