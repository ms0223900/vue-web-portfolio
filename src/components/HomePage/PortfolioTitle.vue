<template>
  <div class="wrapper">
    <h1>
      {{ "Penguin's Portfolio" }}
    </h1>
    <div />
  </div>
</template>

<script>
export default {
  name: 'PortfolioTitle',
};
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 16px;
    border-radius: 8px;
    border: 4px solid var(--primary);
    box-shadow: 8px 8px 0px var(--secondary);
    transition: 0.1s;
    &:hover {
      transition: 0.1s;
      box-shadow: 13px 13px 0px var(--secondary);
      transform: translate(-3px, -3px);
    }
  }
  h1 {
    color: var(--primary);
    font-weight: 800;
    text-align: center;
  }
</style>
