<template>
    <form @submit.prevent="logIn" class="form">
        <input type="email" placeholder="Email" required v-model="store.email" />
        <input type="password" placeholder="Lozinka" minlength="6" required v-model="store.password" />
        <button>Prijava</button>
    </form>
</template>

<script>
import { useAuthStore } from '@/stores/useAuthStore';

export default {
    name: 'LoginForm',
    data() {
        return {
            store: useAuthStore()
        }
    },
    methods: {
        async logIn() {
            await this.store.login();
        }
    }
}
</script>