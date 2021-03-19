<template>
  <div class="about-wrapper">
    <frame-wrapper>
      {{ 'content here' }}
    </frame-wrapper>
    <h2>{{ about.title }}</h2>
    <div>
      <VueMarkdown class="markdown-wrapper">
        {{ about.content }}
      </VueMarkdown>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
import about from '@/static/about';
import FrameWrapper from '@/components/Common/FrameWrapper.vue';

// console.log(about);

Vue.use(VueMarkdown);

export default {
  name: 'About',
  data() {
    return ({
      about,
    });
  },
  components: {
    VueMarkdown,
    FrameWrapper,
  },
};
</script>

<style lang="scss">
  .about-wrapper {
    margin: auto;
    max-width: 700px;
  }
  .markdown-wrapper {
    h2 {
      color: var(--primary);
      // padding-left: 6px;
      margin-bottom: 16px;
      font-size: 1.6rem;
      font-weight: bolder;
      // border-left: 6px solid var(--primary);
    }
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
    }
    h4 {
      font-size: 1rem;
      font-weight: 600;
    }

    ul {
      padding-left: 20px;
      li {
        position: relative;
        list-style: none;
        margin-bottom: 4px;
        &:before {
          content: ' ';
          position: absolute;
          top: 4px;
          bottom: 0px;
          left: -12px;
          margin: auto;
          display: block;
          width: 6px;
          height: 4px;
          background-color: var(--primary);
          opacity: 0.5;
        }
      }
    }
  }
</style>
