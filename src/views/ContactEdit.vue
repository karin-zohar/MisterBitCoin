<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit">
        <label>
            Name
            <input v-model="contact.name" type="text">
        </label>
        <label>
            Email
            <input v-model="contact.email" type="text">
        </label>
        <label>Phone
            <input v-model="contact.phone" type="text">
        </label>
        <button>Save</button>
    </form>
</template>

<script>
import { contactService } from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
    }
  },
  methods: {
    async save() {
        await contactService.saveContact(this.contact)
        this.$router.push('/contact')
    }
  },
  async created() {
    const contactId = this.$route.params.id;
    this.contact = (contactId) ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
  },
  computed: {
    imgUrl() {
      return `https://xsgames.co/randomusers/avatar.php?g=${this.contact.gender}`
    },
  },
};
</script>


<style lang="scss">

</style>