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

<style scoped>
  .wrapper {
    padding: 16px;
    border-radius: 8px;
    border: 4px solid var(--primary);
    box-shadow: 8px 8px 0px var(--secondary);
  }
  h1 {
    color: var(--primary);
    font-weight: 800;
    text-align: center;
  }
</style>
