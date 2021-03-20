<template>
  <div>
    <portfolio-title />
    <frame-wrapper />
    <resume-item
      v-for="(resumeItem, i) in resumeList"
      :key="i"
      :content="resumeItem.content"
    />
    <skills-part />
  </div>
</template>

<script>
import PortfolioTitle from '@/components/HomePage/PortfolioTitle.vue';
import FrameWrapper from '@/components/Common/FrameWrapper.vue';
import ResumeItem from '@/components/Common/ResumeItem.vue';
import resumeList from '@/static/resume-list';
import SkillLevelItem from '@/components/Common/SkillLevelItem.vue';
import SkillsPart from '@/components/Common/SkillPart/SkillsPart.vue';

export default {
  name: 'NewVersionHomePage',
  data() {
    return ({
      resumeList,
    });
  },
  components: {
    PortfolioTitle,
    FrameWrapper,
    ResumeItem,
    SkillsPart,
  },
};
</script>

<style>

</style>
