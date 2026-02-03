<template>
    <div>
        <h2>Form</h2>
        <label for="title">Title</label>
        <input type="text" v-model="title"><br>
        <label for="descricion">Description</label>
        <input type="text" v-model="descricion"><br>
        <label for="url">URL</label>
        <input type="text" v-model="url"><br>
        <button @click="$emit('sendNew', check(title, descricion, url))">Add new resource!</button>
    </div>
    <teleport to='body'>
        
    </teleport>
</template>

<script>
    export default {
        name:"formul",
        props:{
            latest: Number,
            recursos: Array
        },
        data() {
            return {
                actualLatest: this.latest+1
            }
        },
        emits: ["sendNew", "remove"],
        methods:{
            check(title, descricion, url){
                if (title, descricion, url) return {id:this.actualLatest++, title:title, descricion:descricion, url: url}
                return null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>