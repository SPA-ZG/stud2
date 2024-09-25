<template>
    <form @submit.prevent="onSubmit" class="form">
        <input type="text" v-model="quoteContent" name="text" placeholder="Add Quote" />
        <button>Save Quote</button>
    </form>
</template>

<script>
import { db } from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
import { useAuthStore } from '@/stores/useAuthStore';

export default {
    name: 'AddQuote',
    data() {
        return {
            quoteContent: '',
            store: useAuthStore(),
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault();
            if (!this.quoteContent) {
                alert('Please add a quote');
                return;
            }
            const docRef = await addDoc(
                collection(db, 'quotes'), 
                {
                    content: this.quoteContent,
                    authorEmail: this.store.user.email
                }
            );

            const newQuote = {
                id: docRef.id,
                content: this.quoteContent,
                authorEmail: this.store.user.email
            }

            this.$emit('add-quote', newQuote);

            this.quoteContent = '';
        }
    }
}
</script>