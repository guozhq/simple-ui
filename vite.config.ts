import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import fs from 'fs';
import { baseParse } from '@vue/compiler-core';

const vueI18nPlugin = {
  name: 'vue-i18n',
  transform(code, id) {
    const isI18nComponent = /vue&type=i18n/.test(id)
    if (!isI18nComponent) { return }
    const file = fs.readFileSync(id.split('?')[0]).toString();
    const parsed = baseParse(file).children.find(n => n.tag === 'i18n');
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join('').trim();
    return `export default function (Component) {
          Component.__sourceCode = ${JSON.stringify(main)
      }
          Component.__sourceCodeTitle = ${JSON.stringify(title)}
        }`.trim();
  },
}
export default defineConfig({
  // base: '/simple-ui',
  // build: {
  //   assetsDir
  // },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
    vueI18nPlugin,
  ]
})
