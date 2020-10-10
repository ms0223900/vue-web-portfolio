<template>
  <div class="wrapper">
    <div class="link-wrapper">
      <LinkBlock
        :href="singleOtherLinkData.link"
      />
      <img
        :alt="singleOtherLinkData.title"
        :src="singleOtherLinkData.iconSrc"
      />
      <h3>{{ singleOtherLinkData.title }}</h3>
    </div>
    <p>{{ singleOtherLinkData.intro }}</p>
  </div>
</template>

<script>
import LinkBlock from '@/components/LinkBlock.vue';

export default {
  name: 'OtherLinkItem',
  props: {
    singleOtherLinkData: {
      title: {
        type: String,
      },
      link: {
        type: String,
      },
      iconSrc: {
        type: String,
      },
      intro: {
        type: String || undefined,
      },
    },
  },
  components: {
    LinkBlock,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    padding: 12px;
    border-radius: 8px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
    h3 {
      padding: 0px;
      margin: 0px;
      padding-left: 8px;
    }
    p {
      margin: 0px;
    }
    transition: 0.2s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
      transition: 0.2s;
    }
  }
  .link-wrapper {
    display: flex;
    align-items: center;
  }
</style>
