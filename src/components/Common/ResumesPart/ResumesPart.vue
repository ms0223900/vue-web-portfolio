<template>
  <div>
    <part-title title="自我介紹 Self Intros" />
    <div
      v-for="(resumeItem, i) in resumeList"
      :key="i"
      class="resume-item-wrapper"
    >
      <resume-item
        :content="resumeItem.content"
      />
    </div>
  </div>
</template>

<script>
import resumeList from '@/static/resume-list';
import ResumeItem from './ResumeItem.vue';
import PartTitle from '../PartTitle.vue';

export default {
  components: { ResumeItem, PartTitle },
  name: 'ResumesPart',
  data() {
    return ({
      resumeList,
    });
  },
};
</script>

<style lang="scss" scoped>
  .resume-item-wrapper {
    padding-bottom: 36px;
  }
</style>
