<template>
    <header>
        <h1><router-link to="/" class="title">{{ title }}</router-link></h1>
        <Button v-if="!store.user" label="Prijavi se" @btn-click="login()" />
        <Button v-else label="Odjavi se" @btn-click="logout()" />
    </header>
</template>

<script>
import router from '@/router';
import Button from './Button.vue';
import { useAuthStore } from '@/stores/useAuthStore';

export default {
    name: 'Header',
    props: {
        title: String,
    },
    components: {
        Button
    },
    data() {
        return {
            store: useAuthStore()
        }
    },
    methods: {
        login() {
            router.push({ name: 'login' });
        },
        logout() {
            this.store.logout();
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(135, 206, 250, 0.5);
}
.title {
    color: inherit;
    text-decoration: inherit;

}
</style>