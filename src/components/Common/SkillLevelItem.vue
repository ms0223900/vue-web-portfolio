<template>
  <div class="wrapper">
    <h3>{{ skillName }}</h3>
    <div class="skill-wrapper">
      <div
        v-for="(item, i) in Array(5).fill(0)"
        :key="i"
        :class="['skill-item', {
          contained: i <= level,
        }]"
      />
      <span>{{ levelName }}</span>
    </div>
  </div>
</template>

<script>

const skillLevels = [
  '不熟',
  '尚可',
  '普通',
  '熟練',
  '精通',
];

export default {
  name: 'SkillLevelItem',
  props: {
    level: {
      type: Number,
    },
    skillName: {
      type: String,
    },
  },
  computed: {
    levelName() {
      return skillLevels[this.level];
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    h3 {
      font-size: 1.5rem;
      width: 50%;
    }
    .skill-wrapper {
      width: 50%;
      display: flex;
      align-items: center;
      padding-left: 8px;
      span {
        color: #555;
      }
    }
  }
  .skill-item {
    min-width: 18px;
    height: 8px;
    border-radius: 2px;
    // border-color: var(--primary);
    // border-width: 1.5px;
    // border-style: solid;
    background-color: #ccc;
    &:nth-child(n+1) {
      margin-right: 3px;
    }
    &.contained {
      background-color: var(--primary);
    }
  }
</style>
