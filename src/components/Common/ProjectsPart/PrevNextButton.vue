<template>
  <div class="button-wrapper" @click="$emit('click')">
    <img :src="imgSrc" />
  </div>
</template>

<script>

export default {
  name: 'PrevNextButton',
  props: {
    buttonType: {
      type: String,
    },
  },
  computed: {
    imgSrc() {
      if (this.buttonType === 'prev') {
        return './assets/images/icons/keyboard_arrow_left-24px.svg';
      }
      return './assets/images/icons/keyboard_arrow_right-24px.svg';
    },
  },
};
</script>

<style lang="scss">
  .button-wrapper {
    user-select: none;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    padding: 10px;
    border: 2px solid var(--primary);
    border-radius: 100%;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: var(--secondaryLight);
      transition: 0.2s;
    }
    img {
      width: 100%;
      color: var(--primary);
    }
  }
</style>
