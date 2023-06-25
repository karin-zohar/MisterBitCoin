<script>
import {userService} from '../services/user.service'
import {bitcoinService} from '../services/bitcoin.service'
export default {
  data() {
    return {
      user: userService.getUser(),
      bitcoinRate: "loading...",
    }
  },
  methods: {},
  computed: {},
  async created() {
    this.bitcoinRate = (await bitcoinService.getRate()) || "loading..."
  },
  components: {},
}
</script>

<template>
  <div class="home-page">
    <div class="user-info">
      <h2>Welcome back, {{ this.user.name}}!</h2>
      <p><span class="semibold">Your balance: ₿</span>{{ this.user.balance }}</p>
      <p><span class="semibold">Current Bitcoin exchange rate: </span>{{ this.bitcoinRate }}</p>
    </div>
  </div>
</template>

