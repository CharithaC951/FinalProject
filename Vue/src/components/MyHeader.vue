<template>
  <header class="header">
    <h1>{{ content }}</h1>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    content: String
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  padding: 20px;
  background: #f8f8e1;
  border-bottom: 1px solid #eee;
}

.header h1 {
  margin-bottom: 10px;
  color: #333;
}
</style>