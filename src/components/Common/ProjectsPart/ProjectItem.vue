<template>
  <frame-wrapper
    :wrapperStyles="wrapperStyles"
  >
    <div
      class="project-item-wrapper"
    >
      <h3>{{ singleProjectData.title }}</h3>
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
        <p class="col-8">{{ singleProjectData.intro }}</p>
        <div class="col-4">
          <button class="frame-style-button outlined">查看細節</button>
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
        maxWidth: 300,
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
    padding: 8px;
    // background-color: #eee;
    h3 {
      // position: absolute;
      top: 8px;
      left: 8px;
      padding: 8px;
      margin-bottom: 4px;
      // background-color: #fff;
      background-color: var(--primary);
      color: #fff;
      border-radius: 4px;
      // border: 4px solid var(--primary);
      // font-size: 1.1rem;
    }
    .intro-wrapper {
      padding: 4px;
    }
    .img-wrapper {
      border-radius: 4px;
      max-height: 320px;
      overflow: hidden;
      &:hover {
        opacity: 0.9;
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
