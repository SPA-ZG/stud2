<template>
    <h1>Registracija</h1>
    <SignupForm />
    <p>Imaš korisnički račun? <router-link to="/login"><span>Prijavi se</span></router-link></p>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';

export default {
    name: 'Signup',
    components: {
        SignupForm
    }
}
</script>

<style scoped>
h1, p {
    text-align: center;
}
</style>