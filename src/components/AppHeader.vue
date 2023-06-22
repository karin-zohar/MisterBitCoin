<script>
import { RouterLink, RouterView } from "vue-router";
import Logo from './Logo.vue'

export default {
    data() {

    },
    methods: {
        
    },
    components: {
        Logo
    }
}
</script>

<template>
  <header class="app-header main-layout full">
    <div class="app-header-content">
        <RouterLink to="/"><Logo /></RouterLink>
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="user-info">
          ♥
      </div>
    </div>

  </header>
</template>



<style lang="scss">
@import "../assets/style/main.scss";

.app-header {
  .app-header-content {
    display: grid;
    grid-template-rows: 1fr;
    width: 100%;
    align-items: center;

    > * {
        grid-row: 1;
    }

    .logo {
      grid-row: 1;
      justify-self: start;
      cursor: pointer;
    }
    nav {
      grid-row: 1;
      justify-self: center;
      width: max-content;
     
      a {
        margin-inline-end: 1em;
        font-family: Bellota-bold;
        font-size: 1.1rem;
        color: $dark-accent;

        &:hover {
          color: $accent;
        }
      }
    }

    .user-info {
        justify-self: end;
    }
  }
}
</style>