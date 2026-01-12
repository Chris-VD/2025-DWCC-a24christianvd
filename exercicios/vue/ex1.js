const { createApp } = Vue;
createApp({
    data(){
        return {
            nome: "Christian",
            ano: 2026,
            imaxe: "<img src=\"https://cdn2.thecatapi.com/images/MTYzMzQ3NQ.jpg\" />",
            caixa: "<p style=\"border: 2px solid black\">Christian</p>",
            count: 0,
        }
    },
    methods: {
        incrementar() {
            console.log("incre");
            
            this.count++;
        },
        decrementar() {
            console.log("decre");
            this.count--;
        }
    }
}).mount("#app")