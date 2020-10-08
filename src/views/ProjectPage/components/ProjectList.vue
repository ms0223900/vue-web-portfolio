<template>
  <div class="project-list-wrapper">
    <ProjectItem
      v-for="(singleProjectData, i) in projectListData"
      :key="i"
      :singleProjectData="singleProjectData"
    />
  </div>
</template>

<script>
import projectListData from '@/static/projects';
import ProjectItem from './ProjectItem.vue';

export default {
  name: 'ProjectList',
  data() {
    return ({
      projectListData,
    });
  },
  components: {
    ProjectItem,
  },
};
</script>

<style>
  .project-list-wrapper {
    display: flex;
  }
</style>
