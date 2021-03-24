<template>
  <div class="wrapper">
    <div class="projects-wrapper">
      <prev-next-button
        :buttonType="'prev'"
        @click="handlePrevNext('prev')"
      />
      <div :style="{
        overflow: 'hidden',
        flex: '1',
        minHeight: '500px',
      }">
        <transition name="fade" mode="out-in">
          <project-item
            :key="JSON.stringify(singleProjectData)"
            :singleProjectData="singleProjectData"
          />
        </transition>
      </div>
      <prev-next-button
        :buttonType="'next'"
        @click="handlePrevNext('next')"
      />
    </div>
    <bullet-list
      :amount="projectsAmount"
      :selectedIndex="selectedIndex"
    />
  </div>
</template>

<script>
import projects from '@/static/projects';
import ProjectItem from './ProjectItem.vue';
import PrevNextButton from './PrevNextButton.vue';
import BulletList from './BulletList.vue';

const allProjects = projects.slice(0, 3);

export default {
  components: { ProjectItem, PrevNextButton, BulletList },
  name: 'ProjectsPart',
  data() {
    const initSelectedIndex = 0;

    return ({
      projectsAmount: allProjects.length,
      selectedIndex: initSelectedIndex,
    });
  },
  methods: {
    handlePrevNext(type) {
      const lastIndex = allProjects.length - 1;

      if (type === 'prev') {
        if (this.selectedIndex === 0) {
          this.selectedIndex = lastIndex;
        } else {
          this.selectedIndex -= 1;
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (this.selectedIndex === lastIndex) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
      }
    },
  },
  computed: {
    singleProjectData() {
      const res = allProjects
        .map((p) => ({
          ...p,
          imgSrc: p.image.src,
          intro: p.introduction,
          link: p.link,
        }))
        .find((p, i) => i === this.selectedIndex);
      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
  .projects-wrapper {
    display: flex;
    align-items: center;
  }
  .fade-enter-active, .fade-leave-active {
    position: relative;
    // left: 10000px;
    transition: 0.2s;
  }
  .fade-enter, .fade-leave-to {
    // display: none;
    opacity: 0;
    // transform: translateY(30px);
  }
</style>
