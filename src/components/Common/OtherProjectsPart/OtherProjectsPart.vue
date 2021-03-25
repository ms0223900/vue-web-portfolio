<template>
  <div>
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
import OtherProjectList from './OtherProjectList.vue';

export default {
  components: { OtherProjectList, FrameWrapper },
  name: 'OtherProjectsPart',
};
</script>

<style>

</style>
