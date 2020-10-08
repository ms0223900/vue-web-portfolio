<template>
  <div>
    <div
      class="project-item"
    >
      <img
        :alt="singleProjectData.title"
        :src="singleProjectData.imageSrc"
      />
    </div>
    <h3>{{ singleProjectData.title }}</h3>
    <p>{{ singleProjectData.introduction }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    singleProjectData: {
      id: String,
      imageSrc: String,
      title: String,
      introduction: String,
    },
  },
};
</script>

<style>
  .project-item {
    box-shadow: 0px 0px 10px #ddd;
  }
</style>
