<script>
import FoodItem from './components/FoodItem.vue';

  export default {
    data() {
      return {
        message: 'Ola mundo!',
        count: 0
      }
    },
    methods: {
      increment(){
        this.count++;
      }
    },
    components: {
      FoodItem,
    }
  }
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="increment">You clicked this button {{ count }} times</button>
  <FoodItem/>
</template>

<style scoped></style>