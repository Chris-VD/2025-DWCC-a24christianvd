<script>
import FoodItem from './components/FoodItem.vue'
import BlogPost from './components/BlogPost.vue'

export default{
  data(){
    return {
      erm: "Message",
      message: "Hola",
      count: 0,
      title: 'Título post',
      title2: 'Título post 2',
      id: 34,
      posts: [
        {id: 1, title: "Erm"},
        {id: 2, title: "Erm2"},
        {id: 3, title: "Erm3"},
      ]
    }
  },
  components: {FoodItem, BlogPost},
  methods: {
    change(){
      this.erm.toUpperCase()
    }
  }
}
</script>

<template>
    <h1>Hello world, {{ message }}</h1>
    <p @click.left="count++" @click.right="count--">num: {{ count }}</p>
    <p>{{ erm }}</p>
    <button @click="change">Change</button> <button>Add</button>
    <FoodItem/>
    <BlogPost title="Titulo pai cousa" id="1"/>
    <BlogPost :title :id="count"/>
    <BlogPost :title="title2" :id/>
    <BlogPost v-for="post in posts" :id="post.id" :title="post.title"/>
</template>

<style>
  h1{
    background-color: blue;
  }
</style>
