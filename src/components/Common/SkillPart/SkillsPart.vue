<template>
  <div class="wrapper container skills-part-wrapper" :style="skillsPartStyles">
    <part-title title="技能 Skills" />
    <div class="row skill-list-wrapper">
      <div
        v-for="(skill, i) in skillList"
        :key="i"
        class="col-12 col-md-6"
      >
        <skill-realm-item
          :skillRealmData="skill"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import skillList, { SingleSkillData } from '@/static/skillList';
import SkillRealmItem from './SkillRealmItem.vue';
import PartTitle from '../PartTitle.vue';

const sortByLevelFn = (prev: SingleSkillData, next: SingleSkillData) => (
  next.level - prev.level
);

const sortedSkillList = skillList.map((s) => ({
  ...s,
  skills: s.skills.sort(sortByLevelFn),
}));

export default {
  components: { SkillRealmItem, PartTitle },
  name: 'SkillsPart',
  data() {
    const skillsPartStyles = {
      backgroundImage: `url(${'./assets/images/bg/bg-triangles.png'})`,
    };
    return ({
      skillsPartStyles,
      skillList: sortedSkillList,
    });
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    // border-width: 4.5px;
    // border-style: solid;
    // border-color: var(--primary);
    border-radius: 8px;
  }
  .skill-list-wrapper {
    padding: 4px;
  }

  h2 {
    text-align: center;
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 1.5rem;
    font-weight: bolder;
    // border-bottom: 2px solid var(--primary);
  }
  .skills-part-wrapper {
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 100% auto;
  }
</style>
