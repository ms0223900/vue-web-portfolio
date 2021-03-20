<template>
  <div>
    <frame-wrapper>
      <div class="skill-realm-wrapper">
        <h3>
          {{ skillRealmData.skillRealmName }}
        </h3>
      </div>
    </frame-wrapper>
    <div
      class="skills-wrapper"
    >
      <div
        class="skill-item-wrapper"
        v-for="(skill, i) in skillRealmData.skills"
        :key="i"
      >
        <skill-level-item
          :level="skill.level"
          :skillName="skill.skillName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FrameWrapper from '../FrameWrapper.vue';
import SkillLevelItem from '../SkillLevelItem.vue';

export default {
  components: { FrameWrapper, SkillLevelItem },
  name: 'SkillRealmItem',
  props: {
    skillRealmData: {
      skillRealmName: {
        type: String,
      },
      skills: {
        type: Array,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  h3 {
    color: var(--primary);
  }
  .skill-realm-wrapper {
    padding: 4px;
    text-align: center;
  }
  .skills-wrapper {
    padding-top: 8px;
    padding-left: 4px;
  }
  .skill-item-wrapper {
    &:nth-child(n+2) {
      padding-top: 8px;
      // border-top: 2px solid #ddd;
    }
  }
</style>
