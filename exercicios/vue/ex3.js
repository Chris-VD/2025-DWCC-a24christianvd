const { createApp } = Vue;
createApp({
    data(){
        return {
            text: "",
            text2: ""
        }
    },
    methods: {
        reload(event){
            this.text = event.target.value
        },
        t2(event){
            event.preventDefault()
            this.text2 = document.querySelector("#inp").value
            document.querySelector("#inp").value = ""
        },
        log(){
            console.log("pressed")
        }
    }
}).mount("#app")