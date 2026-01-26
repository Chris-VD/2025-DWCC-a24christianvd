<template>
    <div>
        <h2>{{ title }}</h2>
        <span>ID ^^ : {{ id }}</span>
    </div>
</template>

<script>
    export default {
        props: ["title", "id"],
        data() {
            return {
                
            }
        },
    }
</script>

<style>

</style>