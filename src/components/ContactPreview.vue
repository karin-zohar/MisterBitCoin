<template>
    <article class="contact-preview">
        <h4>{{ contact.name }}</h4>
        <p>Email: <span class="light">{{ contact.email }}</span></p>
        <p>Phone: <span class="light">{{ contact.phone }}</span></p>
        <div class="actions">
            <button class="delete-btn">Delete</button>
            <button class="details-btn">Details</button>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        contact: {type: Object, required: true}
    }
}
</script>

<style lang="scss">

</style>