<template>
    <div class="home">
        <p>Total: {{ numOfQuotes }} quotes</p>
        <Button 
            v-show="store.user" 
            :label="showAddQuote ? 'Odustani' : 'Stvori novi quote'" 
            :color="showAddQuote ? 'red' : 'lightgreen'" 
            @btn-click="toggleAddQuote"
        />
        <AddQuote 
            v-show="showAddQuote" 
            @add-quote="addNewQuote" 
        />
        <Quote
            v-for="quote in quotes"
            :key="quote.id" 
            :id="quote.id"
            :content="quote.content"
            :authorEmail="quote.authorEmail"
        />
    </div>
</template>

<script>
import { db } from '../firebase/init.js'
import { onSnapshot, collection } from 'firebase/firestore'
import Quote from '@/components/Quote.vue'
import Button from '@/components/Button.vue'
import AddQuote from '@/components/AddQuote.vue'
import { useAuthStore } from '@/stores/useAuthStore';


export default {
    name: 'Home',
    components: {
        Quote,
        Button,
        AddQuote
    },
    data() {
        return {
            quotes: [],
            store: useAuthStore(),
            showAddQuote: false
        }
    },
    methods: {
        toggleAddQuote() {
            this.showAddQuote = this.store.user ? !this.showAddQuote : false;
        },
        async fetchAllQuotes() {
            onSnapshot(
                collection(db, 'quotes'), 
                (snap) => {
                    this.quotes = [];
                    snap.forEach((doc) => {
                        this.quotes.push(doc.data())
                    })
                }
            );
        },
        async addNewQuote(quote) {
            this.quotes = [quote, ...this.quotes];
        }
    },
    computed: {
        numOfQuotes() {
            return this.quotes.length
        }
    },
    created() {
        this.fetchAllQuotes();
    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}
</style>

