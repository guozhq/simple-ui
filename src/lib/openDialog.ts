import { VNode, createApp, h } from "vue"
import Dialog from './Dialog.vue'
interface Options {
  title: VNode;
  content?: string;
  ok?: () => boolean;
  cancel?: () => void;
}
export const openDialog = (options: Options) => {
  const { title, content, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount();
    div.remove();
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible: boolean) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel
        },
        {
          title,
          content,
        }
      )
    }
  })
  app.mount(div);
}