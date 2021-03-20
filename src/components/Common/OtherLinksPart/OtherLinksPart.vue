<template>
  <div class="other-links-part-wrapper">
    <div
      v-for="(otherLink, i) in otherLinks"
      :key="i"
      class="link-item-wrapper"
    >
      <other-link-item
        :singleOtherLinkData="otherLink"
      />
    </div>
  </div>
</template>

<script>
import otherLinks from '@/static/other-links';
import OtherLinkItem from './OtherLinkItem.vue';

export default {
  components: { OtherLinkItem },
  name: 'OtherLinksPart',
  data() {
    return ({
      otherLinks,
    });
  },
};
</script>

<style lang="scss" scoped>
  .other-links-part-wrapper {
    max-width: 400px;
    margin: auto;
  }
  .link-item-wrapper {
    padding-bottom: 8px;
  }
</style>
