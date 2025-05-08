import { createApp } from 'vue'
import App from './App.vue'

// Add this line to fix the error
window.process = { env: {} }

createApp(App).mount('#app')