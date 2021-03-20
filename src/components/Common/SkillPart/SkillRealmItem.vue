<template>
  <div
    class="skill-realm-item-wrapper"
  >
    <frame-wrapper
      :wrapperStyles="{
        borderWidth: '0px',
        boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.2)',
      }"
      :isSmallBTN="true"
    >
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
import SkillLevelItem from './SkillLevelItem.vue';

export default {
  components: {
    FrameWrapper,
    SkillLevelItem,
  },
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
    font-size: 1.2rem;
    color: var(--primary);
  }
  .skill-realm-item-wrapper {
    padding-bottom: 8px;
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
