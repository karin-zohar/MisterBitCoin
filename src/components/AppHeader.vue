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
  async created() {
    this.bitcoinRate = (await bitcoinService.getRate()) || "loading..."
  },
}
</script>

<template>
  <header class="app-header main-layout full">
    <div class="app-header-content">
      <RouterLink to="/"><Logo /></RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
      </nav>
      <div class="bitcoin-rate">
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

        &::before {
          content: "";
          position: absolute;
          background-image: radial-gradient(rgba($accent, 0.2), transparent);
          height: 1.3em;
          padding-inline: 0.2em;
          width: 3em;
          scale: 0;
          transition: 0.2s;

          // margin-block: 1.3em;
        }

        &.router-link-active::before {
          scale: 1;
        }

        &:hover {
          color: $accent;
        }
      }
    }

    .bitcoin-rate {
      color: $clr2;
      display: flex;
      flex-direction: column;
      text-align: center;
      background-color: rgba($accent, 0.2);
      width: max-content;
      border-radius: 4px;
      padding: 0.5em;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    }

    .user-info {
      justify-self: end;

      .logged-in {
        .user-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: lightgray;
          background-size: 48px;
          background-position: cover;
          background-repeat: no-repeat;
          border: 2px solid $dark-accent;
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