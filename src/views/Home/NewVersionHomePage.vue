<template>
  <div
    class="homepage-wrapper"
  >
    <div class="main-wrapper">
      <portfolio-title />
      <projects-part />
      <resumes-part />
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
import SkillsPart from '@/components/Common/SkillPart/SkillsPart.vue';
import OtherLinksPart from '@/components/Common/OtherLinksPart/OtherLinksPart.vue';
import ProjectsPart from '@/components/Common/ProjectsPart/ProjectsPart.vue';
import OtherProjectsPart from '@/components/Common/OtherProjectsPart/OtherProjectsPart.vue';
import FooterPart from '@/components/Common/FooterPart/FooterPart.vue';
import ResumesPart from '@/components/Common/ResumesPart/ResumesPart.vue';

export default {
  name: 'NewVersionHomePage',
  data() {
    return ({
      // resumeList,
    });
  },
  components: {
    PortfolioTitle,
    SkillsPart,
    OtherLinksPart,
    ProjectsPart,
    OtherProjectsPart,
    FooterPart,
    ResumesPart,
  },
};
</script>

<style lang="scss" scoped>
  .homepage-wrapper {
    .main-wrapper {
      padding-top: 8px;
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
