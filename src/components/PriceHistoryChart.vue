<template>
    <div class="price-history">
        <h1>price history</h1>
        <BarChart v-if="priceHistory" :chartData="priceHistoryData" />
    </div>
</template>

<script>
import BarChart from './BarChart.vue'
import {bitcoinService} from '../services/bitcoin.service'
export default {
    data() {
        return {
            priceHistory: null
        }
    },
    async created() {
        this.priceHistory = await bitcoinService.getMarketPriceHistory()
    },
    components: { BarChart },
    computed: {
        priceHistoryData() {
      return {
        labels: this.priceHistory.values.map((dataSample) => {
          let date = dataSample.x;
          date = new Date(date * 1000)
          return date.toISOString().split("T")[0];
        }),
        datasets: [
          {
            label: "Average USD market price across major bitcoin exchanges.",
            backgroundColor: "#42eeee",
            data: this.priceHistory.values.map((dataSample) => dataSample.y),
          },
        ],
      }
    },
    }
}
</script>

<style lang="scss">
.price-history {
    h1 {
        color: white;
    }
}
</style>