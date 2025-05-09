<template>
  <section class="momSection">
  <div class="caption-container">
      <h3>{{ caption }}</h3>
    </div>
    <div class="image-container">
      <img :src="imageUrl" alt="mom image" class="mom-image" />
      <h3>{{ name }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MomSection',
  props: {
    imageUrl: String,
    name: String,
    caption: String
  }
}
</script>

<style scoped>
.momSection {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 1rem;
  padding-top:15px;
  padding-bottom:15px;
  gap: 1rem;
}

.image-container {
  display: grid;
  justify-items: center;
}

.mom-image {
  width: 200px;
  height: 200px;
  background: #fff7f1;
  padding: 5px; 
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
}

.caption-container h3 {
  text-align: justify;
  color: #333;
}

.image-container h2 {
  text-align: center;
  margin-top: 5px;
  color: #333;
}
</style>
