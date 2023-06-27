<script>
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
    },
    isWide() {
      console.log('window.innerWidth:', window.innerWidth > 900)
      return (window.innerWidth > 900) 
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
        <RouterLink to="/statistics/price-history">Statistics</RouterLink>
      </nav>
      <div v-show="isHomePage && isWide" class="bitcoin-rate">
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

</style>