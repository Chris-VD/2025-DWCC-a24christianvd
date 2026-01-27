<template>
    <div>
        <h2>{{ post.title }}</h2>
        <span>ID ^^ : {{ post.id }}</span>
        <button @click="likes++">{{ likes }}</button>
    </div>
</template>

<script>
    export default {
        // props: ["title", "id"],
        props: {
            post: Object,
        },
        data() {
            return {
                likes: 0,
            }
        },
    }
</script>

<style>

</style>