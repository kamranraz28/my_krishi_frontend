import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/routes'; // Import your router

// Create the app and use the head manager
const app = createApp(App);

// Set global baseURL
app.config.globalProperties.$baseURL = 'https://app.mykrishi.com';

app.use(createHead()); // Use createHead here
app.use(router); // Your router setup
app.mount('#app');

