<template>
    <section class="contact-filter">
        <input 
        type="text"
        @input="onSetFilterBy"
        v-model="filterBy.txt"
        placeholder="Find contacts"
        >
    </section>
</template>

<script>
export default {
  data() {
    return {
        filterBy: {
            txt: '',
        },
    }
  },
  methods: {
    onSetFilterBy() {
      this.$emit("filter", this.filterBy)
    }
  }
}
</script>

<style lang="scss">
</style>