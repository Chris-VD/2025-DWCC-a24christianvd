<script>
  import ListaRecursos from './components/ListaRecursos.vue';
  import Formul from './components/Formul.vue';
  import Recurso from './components/Recurso.vue';
  export default{
    data() {
      return {
        recursos: [
          {id: 1, title: "Youtube", descricion: "videos", url: "https://youtube.com"},
          {id: 2, title: "Wikipedia", descricion: "info", url: "https://wikipedia.org"},
          {id: 3, title: "GitHub", descricion: "git", url: "https://github.com"}
        ],
        latest: 3,
        active: "",
      }
    },
    components: {ListaRecursos, Formul, Recurso},
    methods:{
      toAdd(obj){
        if (obj != null) {
          this.recursos.push(obj)
          this.active = "lista-recursos"
        }
      },
      remove(obj){
        for (let recurso of this.recursos){
          if (recurso.id == obj.id){
            this.recursos.splice(this.recursos.indexOf(recurso), 1)
          }
        }
      }
    }
  }
</script>

<template>
  <keep-alive>
    <component :is="active" :recursos :latest @send-new="toAdd" @remove="remove"></component>
  </keep-alive>
  <label for="ff">Submit form:</label>
  <input type="radio" name="fug" id="ff" v-model="active" value="formul"><br>
  <label for="ll">List of resources:</label>
  <input type="radio" name="fug" id="ll" v-model="active" value="lista-recursos">
  <!-- <ListaRecursos :recursos/> -->
  <!-- <Form :latest @send-new="toAdd"></Form> -->
</template>

<style></style>
