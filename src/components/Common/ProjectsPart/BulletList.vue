<template>
  <div class="wrapper">
    <div
      v-for="(a, index) in Array(amount).fill(0)"
      :key="index"
      @click="$emit('click-bullet', index)"
      :class="[
        'bullet-item',
        { selected: selectedIndex === index, }
      ]"
    />
  </div>
</template>

<script>
export default {
  name: 'BulletList',
  emits: [
    'click-bullet',
  ],
  props: {
    amount: {
      type: Number,
    },
    selectedIndex: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    padding-bottom: 8px;
    .bullet-item {
      width: 16px;
      height: 16px;
      border-radius: 100%;
      border-color: var(--primary);
      border-width: 3px;
      border-style: solid;
      background-color: #fff;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background-color: var(--secondaryLight);
      transition: 0.2s;
      }
      &.selected {
        background-color: var(--primary);
      }
      &:nth-child(n+2) {
        margin-left: 4px;
      }
    }
  }
</style>
