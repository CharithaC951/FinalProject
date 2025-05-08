<template>
  <div class="recipe-card">
    <div class="image-section">
      <img :src="recipe.imageUrl" alt="recipe image" class="recipe-image" />
    </div>
    <div class="content-section">
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.description }}</p>
      <button @click="toggleDetails" class="toggle-btn">
        {{ showDetails ? 'Show Less' : 'View Detailed Recipe' }}
      </button>

      <div v-if="showDetails" class="recipe-details">
        <p><strong>Cooking Time:</strong> {{ recipe.cookingTime }}</p>
        <p><strong>Serving Size:</strong> {{ recipe.servingSize }}</p>
        <h4>Ingredients:</h4>
        <ul class="ingredient-list">
          <li v-for="(item, i) in recipe.ingredients" :key="i">{{ item }}</li>
        </ul>

        <h4>Instructions:</h4>
        <ol class="instruction-list">
          <li v-for="(step, i) in recipe.instructions" :key="i">{{ step }}</li>
        </ol>

        <blockquote><em>{{ recipe.memory }}</em></blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleRecipe',
  props: {
    recipe: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
}
</script>

<style scoped>
.recipe-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  border: 1px solid #ddd;
  padding: 1.2rem;
  border-radius: 15px;
  background: #e7f2e4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.image-section {
  grid-column: 1;
}
.recipe-image {
  width: 160px;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
}
.content-section {
  grid-column: 2;
  padding: 0.5rem;
}
h2 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: bold;
  color: #2c3e50;
}
p {
  font-size: 1.1rem;
  color: #34495e;
  margin: 0.3rem 0;
}
h4 {
  margin: 0.5rem 0;
  font-size: 1.3rem;
  color: #2c3e50;
}
blockquote {
  font-style: italic;
  color: #7f8c8d;
  margin: 0.5rem 0;
}
.toggle-btn {
  margin-top: 0.7rem;
  padding: 0.4rem 0.8rem;
  background-color: #a27e94;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.toggle-btn:hover {
  background-color: #a2457b;
}
.recipe-details {
  margin-top: 0.5rem;
  padding: 0.8rem;
  background: #f1d3ce;
  border-radius: 10px;
}
.ingredient-list, .instruction-list {
  margin-left: 1.2rem;
  padding-left: 1.2rem;
}
.ingredient-list li, .instruction-list li {
  list-style-type: disc;
  margin: 0.3rem 0;
}
</style>
