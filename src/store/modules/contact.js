import { contactService } from '@/services/contact.service.js'

export default {
    state() {
        return {
            contacts: null
        }
    },
    mutations: {
        setContacts(state, {contacts}) {
            state.contacts = contacts
        },
        removeContact(state, {contactId}) {
            const idx = state.contacts.findIndex(contact => contact.id === contactId)
            state.contacts.splice(idx, 1)
        }

    },
    actions: {
        async loadContacts({ commit }){
            const contacts = await contactService.getContacts()
            commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { contactId }){
            await contactService.deleteContact(contactId)
            commit({ type: 'removeContact', contactId })
        }

    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        getContact: (state) => (contactId) => state.contacts.find(contact => contact.id === contactId)
    }
}