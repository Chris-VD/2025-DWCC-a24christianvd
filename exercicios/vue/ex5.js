const {createApp} = Vue;
createApp({
    data(){
        return {
            first: "first",
            cl: "green"
        }
    },
    methods:{
        ff(event){
            event.target.classList.toggle(this.first)
        },
        ss(){
            if (this.cl == "green") this.cl = "red"
            else this.cl = "green" 
        },
        change(event){
            event.target.classList.toggle("activa")
        },
        changeOne(event){
            let list = event.currentTarget.children;
            for (div in Array.from(list)){
                if (Array.from(list[div].classList).includes("activa")) list[div].classList.toggle("activa")
            }
            event.target.classList.toggle("activa")
        }
    }
}).mount("#app")