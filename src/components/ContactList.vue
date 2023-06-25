<script>
import ContactPreview from './ContactPreview.vue'
export default {
    methods: {},
    computed: {},
    async created() {
        console.log('contacts: ', this.contacts)
    },
    props: {
        contacts: {type: Array, required: true},
    },
    components: {
        ContactPreview,
    }
}
</script>

<template>
    <section class="contact-list">
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
            <ContactPreview :contact="contact" />
            </li>
        </ul>
    </section>
</template>

<style lang="scss">

</style>