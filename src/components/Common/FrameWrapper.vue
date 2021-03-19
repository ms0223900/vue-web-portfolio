<template>
  <div class="wrapper">
    <div class="nav-wrapper">
      <div :class="['button', 'CLOSE']" @click="$emit('close')"></div>
      <div class="button minimize" @click="$emit('minimize')"></div>
      <div class="button maximize" @click="$emit('maxmize')"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FrameWrapper',
  emits: [
    'close',
    'minimize',
    'maxmize',
  ],
};
</script>

<style lang="scss" scoped>
  .wrapper {
    border-width: 4.5px;
    border-style: solid;
    border-color: var(--primary);
    border-radius: 8px;
    // max-width: 100%;
    // min-width: 500px;
    min-height: 500px;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .nav-wrapper {
    display: flex;
    padding: 8px;
    // border-bottom: 2px solid #aaa;
    border-radius: 4px 4px 0px 0px;
    background-color: var(--secondary);
  }
  .button {
    width: 12px;
    height: 12px;
    border-radius: 2000px;
    margin-right: 8px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
    &.CLOSE {
      background-color: rgb(219, 7, 7);
    }
    &.minimize {
      background-color: rgb(255, 230, 2);
    }
    &.maximize {
      background-color: rgb(9, 170, 44);
    }
  }
</style>
