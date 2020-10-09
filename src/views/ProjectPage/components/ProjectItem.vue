<template>
  <div class="col-sm-12 col-md-6 col-lg-3 wrapper">
    <LinkBlock
      :href="singleProjectData.link"
    />
    <div class="project-item--wrapper">
      <div
        class="project-item--image"
      >
        <img
          :alt="singleProjectData.image.name"
          :src="`${singleProjectData.image.src}`"
        />
      </div>
      <div class="project-item--desc">
        <h3>{{ singleProjectData.title }}</h3>
        <p>{{ singleProjectData.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LinkBlock from '@/components/LinkBlock.vue';

export default {
  name: 'ProjectItem',
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  props: {
    singleProjectData: {
      id: String,
      title: String,
      image: {
        name: String,
        src: String,
      },
      introduction: String,
    },
  },
  components: {
    LinkBlock,
  },
};
</script>
<style lang="scss" scoped>
  .wrapper {
    position: relative;
    padding: 8px;
    box-sizing: border-box;
  }
  .project-item--wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    /* padding: 8px; */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 10px #aaa;
  }
  .project-item--image {
    /* min-height: 180px; */
    /* height: 180px; */
    /* background-color: #ddd; */
  }
  .project-item--image img {
    width: 100%;
    /* height: 100%; */
    background-color: #ddd;
  }
  .project-item--desc {
    padding: 8px;
  }
</style>
