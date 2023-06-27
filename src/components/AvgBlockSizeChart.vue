<template>
  <section class="avg-block-size">
    <BarChart  v-if="avgBlockSize" :chartData="avgBlockSizeData" />
  </section>
</template>

<script>
import BarChart from "./BarChart.vue";
import { bitcoinService } from "../services/bitcoin.service";
export default {
  data() {
    return {
      avgBlockSize: null,
    };
  },
  methods: {},
  computed: {
    avgBlockSizeData() {
      return {
        labels: this.avgBlockSize.values.map((dataSample) => {
          let date = dataSample.x;
          date = new Date(date * 1000);
          return date.toISOString().split("T")[0];
        }),
        datasets: [
          {
            label: "The average block size in MB.",
            backgroundColor: "#42eeee",
            data: this.avgBlockSize.values.map((dataSample) => dataSample.y),
            
          },
        ],
      }
    },
  },
  async created() {
    this.avgBlockSize = await bitcoinService.getAvgBlockSize();
  },
  components: { BarChart },
};
</script>

<style lang="scss">
</style>