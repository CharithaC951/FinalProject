<template>
  <div class="recipe-grid">
    <SingleRecipe v-for="recipe in recipes" :key="recipe.name" :recipe="recipe"/>
  </div>
</template>

<script>
import SingleRecipe from './SingleRecipe.vue'

export default {
  name: 'RecipeBox',
  components: { SingleRecipe },
  props: {
    recipes: Array
  }
}
</script>

<style scoped>
.recipe-grid {
  display: grid;
  grid-template-columns:1;
  grid-template-rows:5;
  gap: 1rem;
  padding: 1rem
}
</style>