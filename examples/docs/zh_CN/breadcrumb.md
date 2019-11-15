## Breadcrumb 面包屑

### 基本使用
:::demo
```html
<template>
  <div>
    <mku-breadcrumb>
      <mku-breadcrumb-item to="/">首页</mku-breadcrumb-item>
      <mku-breadcrumb-item to="/">组件</mku-breadcrumb-item>
      <mku-breadcrumb-item>面包屑</mku-breadcrumb-item>
    </mku-breadcrumb>
  </div>
</template>
```
:::

### 分隔符
:::demo
```html
<template>
  <div>
    <mku-breadcrumb separator="|">
      <mku-breadcrumb-item to="/">首页</mku-breadcrumb-item>
      <mku-breadcrumb-item to="/">组件</mku-breadcrumb-item>
      <mku-breadcrumb-item>面包屑</mku-breadcrumb-item>
    </mku-breadcrumb>

    <mku-breadcrumb separator="=>">
      <mku-breadcrumb-item to="/">首页</mku-breadcrumb-item>
      <mku-breadcrumb-item to="/">组件</mku-breadcrumb-item>
      <mku-breadcrumb-item>面包屑</mku-breadcrumb-item>
    </mku-breadcrumb>
  </div>
</template>
```
:::

### render定义更复杂的分隔符
:::demo
```html
<template>
  <div>
    <mku-breadcrumb :separator-render="customSeparator">
      <mku-breadcrumb-item to="/">首页</mku-breadcrumb-item>
      <mku-breadcrumb-item to="/">组件</mku-breadcrumb-item>
      <mku-breadcrumb-item>面包屑</mku-breadcrumb-item>
    </mku-breadcrumb>

    <mku-breadcrumb :separator-render="customSeparator2">
      <mku-breadcrumb-item to="/">首页</mku-breadcrumb-item>
      <mku-breadcrumb-item to="/">组件</mku-breadcrumb-item>
      <mku-breadcrumb-item>面包屑</mku-breadcrumb-item>
    </mku-breadcrumb>
  </div>
</template>

<script>
  export default {
    methods: {
      customSeparator (h) {
        return h('span', {
          style: {
            color: '#f00'
          }
        }, '^V^')
      },
      customSeparator2 (h) {
        return h('i', {
          class: 'mku-icon mku-icon-double-arrow-right',
          style: {
            color: '#999'
          }
        })
      }
    }
  }
</script>
```
:::

### 使用链接跳转
:::demo
```html
<template>
  <div>
    <mku-breadcrumb>
      <mku-breadcrumb-item to="https://www.baidu.com" target="_self">_self打开百度</mku-breadcrumb-item>
      <mku-breadcrumb-item to="https://www.baidu.com" target="_blank">_blank打开百度</mku-breadcrumb-item>
    </mku-breadcrumb>
  </div>
</template>
```
:::


### Breadcrumb Attributes

| 参数             | 说明                           | 类型       | 可选值 | 默认值 | 必填 |
| :--------------- | :----------------------------- | :--------- | :----- | :----- | :--- |
| separator        | 自定义面包屑的分隔符           | `String`   | -      | `/`    | 否   |
| separator-render | 使用render自定义面包屑的分隔符 | `Function` | -      | -      | 否   |

### Breadcrumb-Item Attributes

| 参数        | 说明                                                                                | 类型     | 可选值 | 默认值 | 必填 |
| :---------- | :---------------------------------------------------------------------------------- | :------- | :----- | :----- | :--- |
| to          | 自定义面包屑的分隔符                                                                | `String` | -      | `/`    | 否   |
| router-type | 定义路由的跳转方式                                                                  | `String` | -      | `push` | 否   |
| target      | 同链接跳转的target属性，开启该属性后，则不再使用路由跳转，而是a标签的`href`属性跳转 | `String` | -      | -      | 否   |
