<template>
    <button
        @click="onClick()"
        v-bind:style="{ background: color }"
        class="btn"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: String,
        color: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        }
    }
}
</script>

<style scoped>
button {
    padding: 0.5rem;
    cursor: pointer;
}
</style>