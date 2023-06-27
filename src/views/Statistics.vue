<template>
  <section class="statistics">
    <nav>
      <RouterLink to="/statistics/price-history">Price History</RouterLink> |
      <RouterLink to="/statistics/avg-block-size">Average Block Size</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>

<script>

export default {
};
</script>

<style lang="scss">

</style>