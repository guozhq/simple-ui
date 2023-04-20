# 介绍

Simple UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库其实是我为了总结自己的技术经验而写的，全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网也几乎都是我自己写的。

所以强烈不建议你将此 UI 库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。源代码放在了 github.com/guozhq/xxxxxxx，历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例，运行方法见 README.md。

# 安装

打开终端运行下列命令：

```
npm install simple-ui
```

或

```
yarn add simple-ui
```
# 开始使用
请先安装本组件库。

然后在你的代码中写入下面的代码

```
// Button组件示例
import {Button} from "simple-ui"
```

就可以使用我提供的Button组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button} from "simple-ui"
export default {
  components: {Button}
}
</script>
```