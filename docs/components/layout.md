---
group:
  title: 样式
  order: 1
---

## flex

为了兼容小程序与 react-native 我们只是用 flex 布局

#### 父级属性

针对父级，我们提供了以下可设置参数

- `flex` 定义 (默认不定义)
- `flex-wrap` 换行 (默认不换行)
- `flex-direction` 竖行排列 (默认横排)
- `justify-start` 水平靠左
- `justify-end` 水平靠右
- `justify-center` 水平居中
- `align-start` 垂直靠左
- `align-end` 垂直靠右
- `align-center` 垂直居中

#### 子级属性

父级定义基本样式后，通过子级我们控制元素如何分割空间

- `flex-sub` 等空间分割 1 份
- `flex-twice` 等空间分割 2 份
- `flex-treble` 等空间分割 3 份
- `basis-xs` 强制占据 20%
- `basis-sm` 强制占据 40%
- `basis-df` 强制占据 50%
- `basis-lg` 强制占据 60%
- `basis-xl` 强制占据 80%

#### pc 端专有

专门为 pc 端定义的标准，主要用于布局

- `container` 内容居中最大宽度 1200px
- `container-lg` 内容居中最大宽度 1400px
