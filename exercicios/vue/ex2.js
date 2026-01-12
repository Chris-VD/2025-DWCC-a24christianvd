const { createApp } = Vue;
createApp({
    data(){
        return {
            text: ""
        }
    },
    methods: {
        reload(event){
            this.text = event.target.value
        }
    }
}).mount("#app")