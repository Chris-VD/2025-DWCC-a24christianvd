<script>
import Recurso from './Recurso.vue';
export default {
    name:"lista-recursos",
    props:{
        recursos: Array,
        latest: Number,
    },
    data() {
        return {

        }
    },
    components: { Recurso },
    emits:["sendNew", "remove"]
}
</script>

<template>
    <h2>List</h2>
    <Recurso v-for="recurso in recursos" :id="recurso.id" :title="recurso.title" :descricion="recurso.descricion"
        :url="recurso.url" @remove="$emit('remove', recurso)"></Recurso><br>
</template>