<template>
    <div>
        <button @click="sumCount">{{ count }}</button>
    </div>
</template>

<script>
    export default {
        name: "contador",
        data() {
            return {
                count: 0
            }
        },
        methods:{
            sumCount(){
                this.count++
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>