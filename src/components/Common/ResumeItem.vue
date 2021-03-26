<template>
  <div class="container">
    <frame-wrapper>
      <div class="markdown-wrapper">
        <VueMarkdown>
          {{ content }}
        </VueMarkdown>
      </div>
    </frame-wrapper>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import FrameWrapper from './FrameWrapper.vue';

export default {
  components: {
    FrameWrapper,
    VueMarkdown,
  },
  name: 'ResumeItem',
  props: {
    content: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
  .markdown-wrapper {
    padding: 16px;
    width: 100%;
    max-height: 500px;
    /* overflow-x: auto; */
    overflow-y: auto;
    font-size: 1.1rem;
    line-height: 1.8;
    pre {
      white-space: pre-wrap;
      color: #333;
    }
    h3 {
      color: var(--primary)
    }
  }
</style>
