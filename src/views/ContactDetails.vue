<template>
    <section class="contact-details">
      <div class="profile-img">
        <img :src="imgUrl" alt="">
      </div>
      <h4>{{ contact.name }}</h4>
    <p>
      Email: <span class="light">{{ contact.email }}</span>
    </p>
    <p>
      Phone: <span class="light">{{ contact.phone }}</span>
    </p>
    </section>
    
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
  computed: {
    imgUrl() {
      return `https://xsgames.co/randomusers/avatar.php?g=${this.contact.gender}`
    }
  }
};
</script>

<style lang="scss">
</style>