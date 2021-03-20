!<template>
  <div>
    <project-item
      v-for="(project, i) in projectListData"
      :key="i"
      :singleProjectData="project"
    />
  </div>
</template>

<script>
import projects from '@/static/projects';
import ProjectItem from './ProjectItem.vue';

export default {
  components: { ProjectItem },
  name: 'ProjectsPart',
  data() {
    const projectListData = projects
      .slice(0, 3)
      .map((p) => ({
        ...p,
        imgSrc: p.image.src,
        intro: p.introduction,
        link: p.link,
      }));
    return ({
      projectListData,
    });
  },
};
</script>

<style>

</style>
