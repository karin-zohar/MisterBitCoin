<template>
  <article
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    class="contact-preview"
  >
    <h4>{{ contact.name }}</h4>
    <p>
      Email: <span class="light">{{ contact.email }}</span>
    </p>
    <p>
      Phone: <span class="light">{{ contact.phone }}</span>
    </p>
    <transition name="actions">
      <div class="actions" :class="isShown">
        <button class="delete-btn" @click.stop="onRemoveContact(contact._id)">
          Delete
        </button>
        <button
          class="details-btn"
          @click.stop="navigateToContact(contact._id)"
        >
          Details
        </button>
      </div>
    </transition>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isHover: false,
    };
  },
  computed: {
    isShown() {
      return this.isHover ? "show" : "";
    },
  },

  emits: ["remove"],
  methods: {
    mouseover() {
      this.isHover = true;
    },
    mouseleave() {
      this.isHover = false;
    },
    onRemoveContact(contactId) {
      console.log("onRemoveContact: ", contactId);
      this.$emit("remove", contactId);
    },
    navigateToContact(id) {
      console.log("id: ", id);
      this.$router.push(`/contact/${id}`);
    },
  },

  props: {
    contact: { type: Object, required: true },
  },
};
</script>

<style lang="scss">
.contact-preview {
  height: max-content;
  .actions {
    // background-color: red;
    transform-origin: top;
    width: max-content;
    overflow: hidden;
    height: 0px;
    transition: height 1s ease;

    &.show {
      height: 40px;
    }
  }
}
</style>