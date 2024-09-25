<template>
    <div class="quote">
        <div class="quote-info">
            <p>Id: {{ id }}</p>
            <p>Author: {{ authorEmail }}</p>
        </div>
        <p class="quote-content">{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'Quote',
    props: {
        id: String,
        content: String,
        authorEmail: String,
    },
}
</script>

<style scoped>
.quote {
    background-color: rgba(135, 206, 250, 0.25);
    border: 1px solid lightskyblue;
    border-radius: 0.25rem;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.quote-info {
    display: flex;
    justify-content: space-between;
    column-gap: 2rem;
}
.quote-content {
    font-size: 1.5rem;
    font-style: italic;
}
</style>