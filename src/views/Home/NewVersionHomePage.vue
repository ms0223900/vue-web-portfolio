<template>
  <div
    class="homepage-wrapper"
  >
    <div class="main-wrapper">
      <portfolio-title />
      <projects-part />
      <resume-item
        v-for="(resumeItem, i) in resumeList"
        :key="i"
        :content="resumeItem.content"
      />
      <div class="skills-part-wrapper">
        <skills-part />
      </div>
      <other-links-part />
      <other-projects-part />
    </div>
    <footer-part />
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
import OtherProjectsPart from '@/components/Common/OtherProjectsPart/OtherProjectsPart.vue';
import FooterPart from '@/components/Common/FooterPart/FooterPart.vue';

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
    OtherProjectsPart,
    FooterPart,
  },
};
</script>

<style lang="scss" scoped>
  .homepage-wrapper {
    .main-wrapper {
      & >:nth-child(n) {
        margin-bottom: 80px;
      }
    }
    // background-position: -10%;
  }
  .skills-part-wrapper {
    background: url('/assets/images/bg/bg-triangles.png') no-repeat;
    background-position: 50% 0%;
    background-size: 100% auto;
  }
</style>
