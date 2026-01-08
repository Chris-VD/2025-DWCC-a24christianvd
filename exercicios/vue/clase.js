
// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;
const { createApp } = Vue;
createApp({
    data() {
        return {
            att:"class",
            message: "Ola mundo!",
            message2: "<b>Ola mundo!</b>",
            clase: "blue",
            num: 99,
            bool: false,
            arr: [2,4,6],
            obx: {lol:"jaja",lmao:"haha"},
            msg:"Tutorial",
            titleClass:{
                id:"ID1",
                class:"red"}
        };
    },
}).mount("#app");
