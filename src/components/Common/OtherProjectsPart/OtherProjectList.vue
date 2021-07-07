<template>
  <div class="other-projects-wrapper">
    <div
      v-for="(sideProjectData, i) in sideProjectList"
      :key="i"
      class="side-project-item-wrapper"
    >
      <other-project-item
        :otherProjectData="sideProjectData"
      />
    </div>
  </div>
</template>

<script>
import projects from '@/static/projects';
import OtherProjectItem from './OtherProjectItem.vue';

const sideProjectList = projects
  .filter((p) => p.tag === 'side-project');

export default {
  components: { OtherProjectItem },
  name: 'OtherProjectList',
  data() {
    return ({
      sideProjectList: [
        ...sideProjectList,
        ...sideProjectList,
      ].map((s) => ({
        ...s,
        content: s.introduction,
        img: s.image,
      })),
    });
  },
};
</script>

<style lang="scss" scoped>
  @keyframes autoScroll {
    0% {
      // left: 0%;
      left: 0%;
      // left: -177.5%;
    }
    100% {
      // left: -177.5%;
      // left: -207%;
      // left: -119.3%;
      left: -1684px;
      // transform: translateX(-66.66%);
    }
  }
  @media screen and (min-width: 1280px) {

  }
  .other-projects-wrapper {
    position: relative;
    display: flex;
    // width: 800px;
    width: 300%;
    // overflow: hidden;
    padding-top: 12px;
    padding-bottom: 12px;
    animation-duration: 10s;
    animation-name: autoScroll;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    &:hover {
      animation-play-state: paused;
    }
    .side-project-item-wrapper {
      padding-left: 12px;
    }
  }
  // @media screen and (min-width: 1280px) {
  //   .other-projects-wrapper {
  //     animation-duration: 10s;
  //   }
  // }
</style>
