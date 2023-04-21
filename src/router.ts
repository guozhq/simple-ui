import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import LayoutDemo from "./components/LayoutDemo.vue";
import Install from './markdown/install.md'
import Intro from './markdown/intro.md'
import GetStarted from './markdown/get-started.md'
// import { h } from "vue";
// import Markdown from './components/Markdown.vue'
// const md = (filename: string) => h(Markdown, { path: `../markdown/${filename}.md`, key: filename });

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: 'intro', component: Intro },
        { path: 'install', component: Install },
        { path: 'get-started', component: GetStarted },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'layout', component: LayoutDemo }
      ]
    }
  ]
})