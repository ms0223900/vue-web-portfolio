<template>
  <div class="project-item-wrapper">
    <a :href="otherProjectData.link ? otherProjectData.link : undefined" target="_blank">
      <div class="img-wrapper">
        <img
          :alt="otherProjectData.img.name"
          :src="otherProjectData.img.src"
        />
      </div>
      <div class="content-wrapper">
        <h2>{{ otherProjectData.title }}</h2>
        <p>{{ otherProjectData.content }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'OtherProjectItem',
  props: {
    otherProjectData: {
      title: String,
      content: String,
      link: String,
      img: {
        name: String,
        src: String,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .project-item-wrapper {
    // flex-shrink: 0;
    // flex-grow: 1;
    width: 200px;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    overflow: hidden;
    .img-wrapper {
      width: 100%;
      height: 140px;
      overflow: hidden;
      img {
        width: 100%;
        // height: 100%;
        vertical-align: middle;
      }
    }
    .content-wrapper {
      padding: 8px;
      h2 {
        font-size: 1.2rem;
        color: var(--primary)
      }
    }
    a {
      p {
        color: #111;
      }
    }
  }
</style>
