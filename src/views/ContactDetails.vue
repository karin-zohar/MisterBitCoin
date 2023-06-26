<template>
    <section class="contact-details">
        
    </section>
    <pre>{{ contact }}</pre>
</template>

<script>
import { contactService } from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params.id;
    this.contact = await contactService.getContactById(contactId);
  },
  components: {},
};
</script>

<style lang="scss">
</style>