import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from '../src/components/HelloWorld.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/123', component: HelloWorld }
  ]
})