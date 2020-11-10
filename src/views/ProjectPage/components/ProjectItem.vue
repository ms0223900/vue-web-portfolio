<template>
  <div class="col-sm-12 col-md-6 col-lg-4 wrapper">
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
    transition: 0.2s;
    &:hover {
      .project-item--wrapper {
        transition: 0.2s;
        // box-shadow: 0px 0px 6px #666;
        box-shadow: 3px 3px 0px var(--primary);
        // border: 3px solid var(--primary);
      }
    }
  }
  .project-item--wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: #fff;
    /* padding: 8px; */
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid var(--primary);
    // box-shadow: 0px 0px 10px #aaa;
    transition: 0.2s;
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
