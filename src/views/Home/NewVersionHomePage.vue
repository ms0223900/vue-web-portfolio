<template>
  <div
    class="homepage-wrapper"
  >
    <portfolio-title />
    <projects-part />
    <resume-item
      v-for="(resumeItem, i) in resumeList"
      :key="i"
      :content="resumeItem.content"
    />
    <skills-part />
    <other-links-part />
  </div>
</template>

<script>
import PortfolioTitle from '@/components/HomePage/PortfolioTitle.vue';
import FrameWrapper from '@/components/Common/FrameWrapper.vue';
import ResumeItem from '@/components/Common/ResumeItem.vue';
import resumeList from '@/static/resume-list';
import SkillsPart from '@/components/Common/SkillPart/SkillsPart.vue';
import OtherLinksPart from '@/components/Common/OtherLinksPart/OtherLinksPart.vue';
import ProjectsPart from '@/components/Common/ProjectsPart/ProjectsPart.vue';

export default {
  name: 'NewVersionHomePage',
  data() {
    return ({
      resumeList,
    });
  },
  components: {
    PortfolioTitle,
    ResumeItem,
    SkillsPart,
    OtherLinksPart,
    ProjectsPart,
  },
};
</script>

<style lang="scss" scoped>
  .homepage-wrapper {
    & >:nth-child(n) {
      margin-bottom: 80px;
    }
  }
</style>
