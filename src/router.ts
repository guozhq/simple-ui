import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import LayoutDemo from "./components/LayoutDemo.vue";
import { h } from "vue";
import Markdown from './components/Markdown.vue'
const md = (filename: string) => h(Markdown, { path: `../markdown/${filename}.md`, key: filename });

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: 'intro', component: md('intro') },
        { path: 'install', component: md('install') },
        { path: 'get-started', component: md('get-started') },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'layout', component: LayoutDemo }
      ]
    }
  ]
})