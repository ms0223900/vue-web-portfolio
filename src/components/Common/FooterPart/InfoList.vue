<template>
  <ul>
    <info-item
      v-for="(info, i) in infoListData"
      :key="i"
      :infoData="info"
    />
  </ul>
</template>

<script>
import infos from '@/static/infos';
import InfoItem from './InfoItem.vue';

export default {
  components: { InfoItem },
  name: 'InfoList',
  data() {
    return ({
      infoListData: infos,
    });
  },
};
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    width: 80%;
    justify-content: space-between;
    list-style: none;
    flex-wrap: wrap;
    &:nth-child(n+2) {
      padding-left: 8px;
    }
  }
  @media screen and (max-width: 400px) {
    ul {
      display: block;
      width: 100%;
    }
  }
</style>
