<template>
    <div>
        <input @keyup="update" type="text" name="text" id="text">
        <p style="border: 1px solid black; width: 20%;">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: "texto",
        data(){
            return {
                text: ""
            }
        },
        methods:{
            update(){
                this.text = document.querySelector("input").value
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>