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
            
            this.text2 = event.target.value
        }
    }
}).mount("#app")