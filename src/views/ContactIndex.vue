<template>
  <div class="contacts-index">
    <ContactFilter @filter="onSetFilterBy" /> 
    <RouterLink to="/contact/edit"><button>Add</button></RouterLink>
    <ContactList v-if="contacts" :contacts="filteredContacts" />
    
  </div>
</template>

<script>
import { contactService } from "../services/contact.service"
import ContactList from "../components/ContactList.vue"
import ContactFilter from "../components/ContactFilter.vue"

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    }
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i")
      return this.contacts.filter((contact) => regex.test(contact.name))
    },
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  components: {
    ContactList,
    ContactFilter
  },
}
</script>

<style lang="scss">
</style>