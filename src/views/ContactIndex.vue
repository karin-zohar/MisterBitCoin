<template>
    <div class="contacts-index">
        <RouterLink to="/contact/edit"><button>Add</button></RouterLink>
        <ContactList v-if="contacts" :contacts="contacts"/>
        <!-- <pre>{{ contacts }}</pre> -->
    </div>
</template>

<script>
import {contactService} from '../services/contact.service'
import ContactList from '../components/ContactList.vue'

export default {
    data() {
        return {
            contacts: null,
            filterBy: {},
        }
    },
    methods: {
        // async removeContact(contactId) {
        //     const msg = {
        //         txt: `Contact ${contactId} removed...`,
        //         type: 'success',
        //         // timeout: 2500,
        //     }
        //     await carService.remove(carId)

        //     const idx = this.cars.findIndex(car => car.id === carId)
        //     this.cars.splice(idx, 1)
        //     eventBus.emit('user-msg', msg)
        // },
        // onSetFilterBy(filterBy) {
        //     this.filterBy = filterBy
        // }
    },
    computed: {},
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactList
    }
}
</script>

<style lang="scss">

</style>