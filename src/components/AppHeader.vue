<script>
import { RouterLink, RouterView } from "vue-router"
import { userService } from "../services/user.service"
import { bitcoinService } from "../services/bitcoin.service"
import Logo from "./Logo.vue"

export default {
  data() {
    return {
      user: userService.getUser(),
      bitcoinRate: "loading...",
    }
  },
  methods: {},
  components: {
    Logo,
  },
  computed:{

    isHomePage() {
      return (this.$route.path === '/') ? false : true
    }
  },

  async created() {
    this.bitcoinRate = (await bitcoinService.getRate()) || "loading..."
  },
}
</script>

<template>
  <header class="app-header main-layout full">
    <div class="app-header-content">
      <RouterLink to="/" class="logo-wrapper"><Logo /></RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/statistics">Statistics</RouterLink>
      </nav>
      <div v-if="isHomePage" class="bitcoin-rate">
        <span class="bold">exchange rate</span><span class="light">{{ this.bitcoinRate }}</span>
      </div>
      <div class="user-info">
        <div class="logged-in" v-if="user">
          <div
            class="user-img"
            :style="{ backgroundImage: `url(${user.imgUrl})` }"
          ></div>
        </div>
        <div class="logged-out" v-else>
          <button class="signup-btn">Sign up</button>
          <button class="login-btn">Log in</button>
        </div>
      </div>
    </div>
  </header>
</template>



<style lang="scss">
@import "../assets/style/main.scss";

.app-header {
  padding-block: 1rem;
  margin-block-end: 1em;
  z-index: 10;
  .app-header-content {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    height: max-content;
    align-items: center;

    > * {
      grid-row: 1;
      grid-column: 1;
    }

    .logo-wrapper {
      align-self: start;
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
        font-family: Bellota-bold;
        font-size: 1.1rem;
        color: $dark-accent;
        &:not(:last-of-type) {
          margin-inline-end: 1em;

        }

        &.router-link-active {
          color: $accent;
        }

        &:hover {
          color: $accent;
        }
      }
    }

    .bitcoin-rate {
      color: $dark-accent;
      display: flex;
      flex-direction: column;
      text-align: center;
      width: max-content;
      border-radius: 4px;
      justify-self: flex-end;
      margin-inline-end: 100px;
      padding: 0.5em;
    }

    .user-info {
      justify-self: end;

      .logged-in {
        .user-img {
          @include profile-img(48px);
          cursor: pointer;
          transition: 0.4s;
          &:hover {
            border-color: $accent;
          }
        }
      }

      .logged-out {
        button {
          @include button-reset;
          color: $dark-accent;
          font-size: 1.1rem;
          font-family: Bellota-bold;
        }
        .signup-btn {
          margin-inline-end: 1em;
        }

        .login-btn {
          @include btn-1($dark-accent);
        }
      }
    }
  }
}
</style>