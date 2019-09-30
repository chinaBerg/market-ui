# Grid 栅格

通过基础的 24 分栏，迅速简便地创建布局

### 基础用法

:::demo
```html
<div class="doc-grid-container">
  <mku-row>
    <mku-col span="24">
      <div class="grid__content grid__content--odd">col-24</div>
    </mku-col>
  </mku-row>
  <mku-row>
    <mku-col span="12">
      <div class="grid__content grid__content--odd">col-12</div>
    </mku-col>
    <mku-col span="12">
      <div class="grid__content grid__content--even">col-12</div>
    </mku-col>
  </mku-row>

  <mku-row>
    <mku-col span="8">
      <div class="grid__content grid__content--odd">col-8</div>
    </mku-col>
    <mku-col span="8">
      <div class="grid__content grid__content--even">col-8</div>
    </mku-col>
    <mku-col span="8">
      <div class="grid__content grid__content--odd">col-8</div>
    </mku-col>
  </mku-row>

  <mku-row>
    <mku-col span="6">
      <div class="grid__content grid__content--odd">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content grid__content--even">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content grid__content--odd">col-6</div>
    </mku-col>
    <mku-col span="6">
      <div class="grid__content grid__content--even">col-6</div>
    </mku-col>
  </mku-row>

  <mku-row>
    <mku-col span="8">
      <div class="grid__content grid__content--odd">col-8</div>
    </mku-col>
    <mku-col span="4">
      <div class="grid__content grid__content--even">col-4</div>
    </mku-col>
  </mku-row>
</div>
```
:::

### 分栏间隔

:::demo
```html
<mku-row :gutter="40">
  <mku-col span="6">
    <div class="grid__content grid__content--odd">col-6</div>
  </mku-col>
  <mku-col span="6">
    <div class="grid__content grid__content--even">col-6</div>
  </mku-col>
  <mku-col span="6">
    <div class="grid__content grid__content--odd">col-6</div>
  </mku-col>
  <mku-col span="6">
    <div class="grid__content grid__content--even">col-6</div>
  </mku-col>
</mku-row>
```
:::

### Row Attributes

| 参数   | 说明             | 类型   | 可选值 | 默认值 | 示例 |
| :----- | :--------------- | :----- | :----- | :----- | :--- |
| gutter | 栅格间隔，单位px | Number | -      | 0      | 20   |

### Col Attributes

| 参数 | 说明                       | 类型   | 可选值      | 默认值 | 示例 |
| :--- | :------------------------- | :----- | :---------- | :----- | :--- |
| span | 栅格所占列数（总列数为24） | Number | 0～24的整数 | 24     | 6    |
