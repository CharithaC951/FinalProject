<template>
  <footer class="footer">
    <h3>{{ finalNote }}</h3>
    <h3>{{ thankyou }}</h3>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  props: {
    finalNote: String,
    thankyou: String
  }
}
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  background: #faf0e6;
  border-bottom: 1px solid #eee;
}

.footer h1 {
  margin-bottom: 10px;
  color: #333;
}
</style>