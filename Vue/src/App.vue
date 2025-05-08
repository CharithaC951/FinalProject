<template>
  <MyHeader content="My Mom's kitchen Magic"/>
  <MomSection 
    imageUrl = "images\Amma.jpeg" name = "Chinnapala Deepa" 
    caption = "That's my beautiful mom, an epitome of love, warmth and kindness. She is incredibly sweet, caring, and thoughtful. Her delicious 
    recipes never fail to brighten my day.My mom's cooking is more than just food, it’s an expression of her unconditional love and care. Every meal she prepares has a unique touch of love. Her kitchen is 
    a place filled with joy and creativity, where flavors come to life and traditions are lovingly preserved. It’s where I learned to appreciate 
    the little things, from the aroma of freshly made curry to the comfort of a home-cooked meal after a long day. Each dish carries a story, a 
    memory, and a piece of her heart, and it's a pleasure to introduce you my favorite recipes from her magical hand."/>
  <p v-if="loading">Loading recipes...</p>
  <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  <MyHeader content="Her Timeless Recipes"/>
  <RecipeBox :recipes="recipes"/>
  <MyFooter finalNote = "I hope these recipes bring a touch of warmth and joy to your table!" 
  thankyou = "Thank you for your time and Enjoy!"/>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MomSection from './components/MomSection.vue'
import RecipeBox from './components/RecipeBox.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MomSection,
    RecipeBox,
    MyFooter
  },
  data() {
    return {
      recipes: [],
      loading: true,
      errorMessage: ''
    }
  },
  methods: {
    async fetchrecipes() {
      try {
        const res = await fetch("https://webfinalproject-v004.onrender.com/api")
        if (!res.ok) {
          throw new Error('Failed to fetch recipes')
        }
        const data = await res.json()
        return data
      } catch (error) {
        this.errorMessage = error.message
        console.error(error)
        return []
      } finally {
        this.loading = false
      }
    }
  },
  async created() {
    this.recipes = await this.fetchrecipes()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color:#dab3ca;
}
.error {
  color: red;
  text-align: center;
  margin: 20px 0;
}
</style>