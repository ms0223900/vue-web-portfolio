<template>
  <div class="container">
    <part-title title="其他專案 Side Projects" />
    <frame-wrapper :wrapperStyles="{
      overflow: 'hidden',
      backgroundColor: '#eee',
    }">
      <other-project-list />
    </frame-wrapper>
  </div>
</template>

<script>
import FrameWrapper from '../FrameWrapper.vue';
import PartTitle from '../PartTitle.vue';
import OtherProjectList from './OtherProjectList.vue';

export default {
  components: { OtherProjectList, FrameWrapper, PartTitle },
  name: 'OtherProjectsPart',
};
</script>

<style>

</style>
