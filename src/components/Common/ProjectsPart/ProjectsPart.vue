<template>
  <div class="wrapper container">
    <part-title title="主要專案 Projects" />
    <div class="projects-wrapper">
      <prev-next-button
        :buttonType="'prev'"
        @click="handlePrevNext('prev')"
      />
      <div class="project-item-wrapper">
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
      @click-bullet="handleSetIndex"
    />
  </div>
</template>

<script>
import projects from '@/static/projects';
import ProjectItem from './ProjectItem.vue';
import PrevNextButton from './PrevNextButton.vue';
import BulletList from './BulletList.vue';
import PartTitle from '../PartTitle.vue';

const allProjects = projects.filter((p) => p.tag === 'formal');

export default {
  components: {
    ProjectItem, PrevNextButton, BulletList, PartTitle,
  },
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
    handleSetIndex(index) {
      if (typeof index === 'number') {
        this.selectedIndex = index;
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
    max-width: 1080px;
    margin: auto;
    // justify-content: flex-end;
  }
  .project-item-wrapper {
    overflow: hidden;
    flex: 1;
    min-height: 500px;
    @media screen and (max-width: 768px) {
      min-height: auto;
    }
  }

  .fade-enter-active, .fade-leave-active {
    position: relative;
    // left: 10000px;
    transition: 0.2s;
  }
  .fade-enter, .fade-leave-to {
    // display: none;
    opacity: 0.2;
    // transform: translateY(30px);
  }
</style>
