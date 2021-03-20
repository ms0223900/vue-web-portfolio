<template>
  <div class="wrapper">
    <header>
      <h2>Skills</h2>
    </header>
    <div class="row">
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

<script>
import skillList from '@/static/skillList';
import SkillRealmItem from './SkillRealmItem.vue';

export default {
  components: { SkillRealmItem },
  name: 'SkillsPart',
  data() {
    return ({
      skillList,
    });
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    border-width: 4.5px;
    border-style: solid;
    border-color: var(--primary);
    border-radius: 8px;
  }

  h2 {
    text-align: center;
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 2px solid var(--primary);
  }
</style>
