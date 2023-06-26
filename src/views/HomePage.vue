<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
export default {
  data() {
    return {
      user: userService.getUser(),
      bitcoinRate: "loading...",
    };
  },
  methods: {},
  computed: {
    balance() {
      return this.user.balance.toFixed(2)
    }
  },
  async created() {
    this.bitcoinRate = (await bitcoinService.getRate()) || "loading...";
  },
  components: {},
};
</script>

<template>
  <div class="home-page main-layout full">
    <div class="hero">
      <p>Your <span>financial future</span> is in your hands.</p>
    </div>
    <div v-if="user" class="user-info">
      <div class="user-info-img"></div>
      <div class="user-info-text">
        <h2>Welcome back, {{ this.user.name }}</h2>
        <p>
          <span class="semibold">Your balance: &#3647; </span>{{ balance }}
        </p>
        <p>
          <span class="semibold">Current Bitcoin exchange rate: </span
          >{{ this.bitcoinRate }}
        </p>
      </div>
    </div>
  </div>
</template>



<style lang="scss">
</style>