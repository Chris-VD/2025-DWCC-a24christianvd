<template>
    <div>
        <h1><a :href="url">{{ title }}</a></h1>
        <p>{{descricion}} - <span>{{ id }}</span></p> 
    </div><button @click="$emit('remove')">Remove</button>
</template>

<script>
    export default {
        props: {
            id: Number,
            title: String,
            descricion: String,
            url: String
        },
        emits:["remove"],
    }
</script>

<style lang="scss">

</style>