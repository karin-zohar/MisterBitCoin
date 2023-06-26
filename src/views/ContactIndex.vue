<template>
  <div class="contacts-index">
    <ContactFilter @filter="onSetFilterBy" />
    <RouterLink to="/contact/edit"><button>Add</button></RouterLink>
    <ContactList 
    v-if="contacts" 
    :contacts="filteredContacts"
    @removeContact="removeContact"
    />
  </div>
</template>

<script>
import { contactService } from "../services/contact.service";
import ContactList from "../components/ContactList.vue";
import ContactFilter from "../components/ContactFilter.vue";
import {eventBus } from "../services/eventBus.service"

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    };
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },

    async removeContact(contactId) {
      try {
        console.log('remove contact')
        const msg = {
          txt: `Contact ${contactId} removed...`,
          type: "success",
          timeout: 2500,
        }
        this.$store.dispatch({ type: 'removeContact', contactId })
        eventBus.emit("user-msg", msg);

      } catch(err) {
        console.log(err)
      }

      // const newContactsArray = await contactService.deleteContact(contactId);
      // this.contacts = [...newContactsArray];
      // console.log("msg:", msg);

    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
    this.contacts = await contactService.getContacts();
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style lang="scss">
</style>