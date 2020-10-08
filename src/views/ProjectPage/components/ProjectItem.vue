<template>
  <div class="project-item--wrapper">
    <div
      class="project-item--image"
    >
      <img
        :alt="singleProjectData.image.name"
        :src="`${publicPath}${singleProjectData.image.src}`"
      />
    </div>
    <div class="project-item--desc">
      <h3>{{ singleProjectData.title }}</h3>
      <p>{{ singleProjectData.introduction }}</p>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style>
  .project-item--wrapper {
    width: 25%;
    /* height: 300px; */
    margin: 8px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 10px #aaa;
  }
  .project-item--image {
    /* background-color: #ddd; */
    /* height: 55%; */
  }
  .project-item--image img {
    width: auto;
    width: 100%;
    /* height: 100%; */
    background-color: #ddd;
  }
  .project-item--desc {
    padding: 8px;
  }
</style>
