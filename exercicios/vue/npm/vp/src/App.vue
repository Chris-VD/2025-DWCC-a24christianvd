<script>
import Contador from './components/Contador.vue';
import Texto from './components/Texto.vue';

export default{
  data() {
    return {
      picked: ""
    }
  },
  components:{
    Contador, Texto
  }
}
</script>

<template>
  <h2>Erm</h2>
  <keep-alive>
    <component :is="picked"></component>
  </keep-alive>
  <label for="main">Contador</label>
  <input type="radio" name="main" id="contador" value="contador" v-model="picked">
  <label for="texto">Texto</label>
  <input type="radio" name="main" id="texto" value="texto" v-model="picked">
</template>

<style scoped></style>
