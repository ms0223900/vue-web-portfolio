<template>
  <div>
    <part-title title="其他連結 Links" />
    <div class="other-links-part-wrapper row container">
      <div
        v-for="(otherLink, i) in otherLinks"
        :key="i"
        class="link-item-wrapper col-12 col-md-6"
      >
        <other-link-item
          :singleOtherLinkData="otherLink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import otherLinks from '@/static/other-links';
import OtherLinkItem from './OtherLinkItem.vue';
import PartTitle from '../PartTitle.vue';

export default {
  components: { OtherLinkItem, PartTitle },
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
    // margin: auto;
    padding: 0px;
    padding-right: 8px;
    padding-bottom: 8px;
  }
</style>
