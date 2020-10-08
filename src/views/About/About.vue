<template>
  <div class="about-wrapper">
    <h2>{{ about.title }}</h2>
    <div>
      <VueMarkdown>
        {{ about.content }}
      </VueMarkdown>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
import about from '@/static/about';

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
  },
};
</script>

<style lang="css" scoped>
  .about-wrapper {
    margin: auto;
    max-width: 700px;
  }
</style>
