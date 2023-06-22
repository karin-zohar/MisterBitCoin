<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="wrapper base-layout main-layout full">
    <AppHeader />
    <main class="main-layout full">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style>
</style>
