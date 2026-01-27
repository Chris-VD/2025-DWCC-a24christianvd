<template>
    <div>
        <h1>{{ nome }}</h1> <span @click="change">{{ fav }}</span>
        <button @click="estado = !estado">
            <span v-if="estado">{{ msg }}</span>
            <span v-else>{{ msg2 }}</span>  
        </button>
        <div v-if="estado"></div>
        <div v-else>
            <span>{{ tel }}</span><br>
            <span>{{ corr }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            nome: {
                type:String
            },
            tel: {
                type:String,
                default: "00000000",
            },
            corr: {
                type:String,
                default: "correo@correo.correo"
            },
            eefav: {
                type:Boolean,
                default:false,
            }
        },
        emits: ["show"],
        data() {
            return {
                msg: "Show more",
                msg2: "Hide",
                estado: true,
                efav: this.eefav,
            }
        },
        computed: {
            fav(){
                return this.efav ? "Fav" : "!Fav"
            }
        },
        emits: ["fav"],
        methods:{
            change(){
                this.efav  = !this.efav
                this.$emit("fav", this)
            }
        }
    }
</script>

<style>

</style>