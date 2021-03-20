<template>
  <div>
    <frame-wrapper>
      <div class="otherlink-wrapper">
        <link-block
          :href="singleOtherLinkData.link"
        />
        <img
          class="link-icon"
          :alt="singleOtherLinkData.title"
          :src="singleOtherLinkData.iconSrc"
        />
        <div class="intro">
          <h3>{{ singleOtherLinkData.title }}</h3>
          <p>{{ singleOtherLinkData.intro }}</p>
        </div>
      </div>
    </frame-wrapper>
  </div>
</template>

<script>
import LinkBlock from '@/components/LinkBlock.vue';
import FrameWrapper from '../FrameWrapper.vue';

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
    FrameWrapper,
    LinkBlock,
  },
};
</script>

<style lang="scss" scoped>
  .otherlink-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 4px;
    .link-icon {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    .intro {
      padding-left: 8px;
    }
  }
</style>
