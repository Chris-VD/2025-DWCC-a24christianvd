<script>
import FoodItem from './components/FoodItem.vue'
import BlogPost from './components/BlogPost.vue'
import Contact from './components/Contact.vue'

export default{
  data(){
    return {
      erm: "message",
      message: "Hola",
      count: 0,
      title: 'Título post',
      title2: 'Título post 2',
      id: 34,
      posts: [
        {id: 1, title: "Erm"},
        {id: 2, title: "Erm2"},
        {id: 3, title: "Erm3"},
      ],
      nomes: [
        {nome: "nome1", tel:"tel1", corr:"corr1", eefav:true},
        {nome: "nome2", tel:"tel2", corr:"corr2", eefav:false},
        {nome: "nome3", tel:"tel3", corr:"corr3", eefav:true},
      ]
    }
  },
  components: {FoodItem, BlogPost, Contact},
  methods: {
    change(){
      if (this.erm == this.erm.toUpperCase()) this.erm = this.erm.toLowerCase()
      else this.erm = this.erm.toUpperCase()
    },
    add(){
      this.erm = this.erm + "!"
    },
    fav(erm){
      for (let nome of this.nomes){      
        if (nome.nome === erm.nome){
          nome.eefav = !nome.eefav
        }
      }
    }
  }
}
</script>

<template>
    <h1>Hello world, {{ message }}</h1>
    <p @click.left="count++" @click.right="count--">num: {{ count }}</p>
    <p>{{ erm }}</p>
    <button @click="change">Change</button> <button @click="add">Add</button>
    <FoodItem/>
    <!-- <BlogPost title="Titulo pai cousa" id="1"/>
    <BlogPost :title :id="count"/>
    <BlogPost :title="title2" :id/> -->
    <BlogPost v-for="post in posts" :post/>
    <Contact nome="Nome"/>
    <Contact v-for="nome in nomes" :nome="nome.nome" :tel="nome.tel" :corr="nome.corr" :eefav="nome.eefav" @fav="fav"/>
</template>

<style>
  h1{
    width: 50%;
    background-color: blue;
  }
</style>
