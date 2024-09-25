<template>
    <h1>Prijava</h1>
    <LoginForm />
    <p>Nemaš korisnički račun? <router-link to="/signup"><span>Registriraj se</span></router-link></p>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>

<style scoped>
h1, p {
    text-align: center;
}
</style>