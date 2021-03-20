<template>
  <div class="other-links-part-wrapper row">
    <div
      v-for="(otherLink, i) in otherLinks"
      :key="i"
      class="link-item-wrapper col-6"
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
    // max-width: 400px;
    margin: auto;
  }
  .link-item-wrapper {
    padding: 0px;
    padding-right: 8px;
    padding-bottom: 8px;
  }
</style>
