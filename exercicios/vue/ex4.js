const { createApp } = Vue;
createApp({
    data(){
        return {
            text:"",
            area:"",
            un:false,
            dous:false,
            radio:"",
            select:""
        }
    },
    methods: {
        clear(event){
            event.preventDefault()
            this.area = "";
            this.text = "";
            this.radio = "";
            this.select = "";
            this.un = false;
            this.dous = false;
        }
    }
}).mount("#app")