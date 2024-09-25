<template>
  <Header title="Best Quotes" />
  <router-view></router-view>
</template>

<script>
import { useAuthStore } from './stores/useAuthStore';
import Header from './components/Header.vue';

export default {
  name: 'App', 
  components: {
    Header
  },
  mounted() {
    useAuthStore().init();
  }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 20rem;
}

.form input {
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.form button {
  padding: 0.5rem;
}

</style>
