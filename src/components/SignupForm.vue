<template>
    <form @submit.prevent="signUp" class="form">
        <input type="email" placeholder="Email" required v-model="store.email" />
        <input type="password" placeholder="Lozinka" required minlength="6" v-model="store.password" />
        <button>Registracija</button>
    </form>
</template>

<script>
import { useAuthStore } from '@/stores/useAuthStore';

export default {
    name: 'SignupForm',
    data() {
        return {
            store: useAuthStore()
        }
    },
    methods: {
        async signUp() {
            await this.store.signup();
        }
    }
}
</script>