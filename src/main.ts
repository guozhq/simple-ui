import './lib/simple.scss'
import './style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/svg.js'
import { router } from './router'
import Markdown from '../src/components/Markdown.vue'
import 'github-markdown-css/github-markdown-light.css';
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)