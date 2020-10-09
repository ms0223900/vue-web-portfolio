<template>
  <div>
    <OtherLinkItem
      v-for="(singleOtherLink, i) in otherLinks"
      :key="i"
      :singleOtherLinkData="singleOtherLink"
    />
  </div>
</template>

<script>
import otherLinks from '@/static/other-links';
import OtherLinkItem from './OtherLinkItem.vue';

export default {
  name: 'OtherLinkList',
  data() {
    return ({
      otherLinks,
    });
  },
  components: {
    OtherLinkItem,
  },
};
</script>

<style>

</style>
