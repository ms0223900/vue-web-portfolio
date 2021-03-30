<template>
  <li>
    <div class="img-wrapper">
      <img
        alt="icon"
        :src="infoData.icon.src"
      />
    </div>
    <h3>
      <a v-if="!!infoData.link" :href="infoData.link" target="_blank">
        {{ infoData.title }}
      </a>
      <template v-else>
        {{ infoData.title }}
      </template>
    </h3>
  </li>
</template>

<script>
export default {
  name: 'InfoItem',
  props: {
    infoData: {
      icon: {
        src: String,
      },
      title: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-left: 16px;
    .img-wrapper {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    h3 {
      font-size: 1rem;
      padding: 8px;
      color: #fff;
      margin-bottom: 0px;
      a {
        color: #fff;
      }
    }
  }
</style>
