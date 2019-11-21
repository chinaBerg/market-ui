## Badge 徽章

### 基本使用
:::demo
```html
  <template>
    <div>
      <mku-badge :value="8" class="doc-mr20">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge :value="8" class="doc-mr20">
        <mku-button type="primary">Hello Mku!</mku-button>
      </mku-badge>
      <mku-badge :value="8" class="doc-mr20">
        <a href="">这是一个链接</a>
      </mku-badge>
    </div>
  </template>
```
:::

### 圆点
支持自定义圆点的大小尺寸。
:::demo
```html
  <template>
    <div>
      <mku-badge dot>
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge dot type="info" :dot-size="20">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge dot type="warning" dot-size="20px">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge dot type="success" dot-size="30%">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
    </div>
  </template>
```
:::

### 展示字符串
:::demo
```html
  <template>
    <div>
      <mku-badge value="hot">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge value="new">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
    </div>
  </template>
```
:::

### 最大值
:::demo
```html
  <template>
    <div>
      <mku-badge :value="1000" :max="99">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
    </div>
  </template>
```
:::

### 偏移量
:::demo
```html
  <template>
    <div>
      <mku-badge dot :offset="['-100%']">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge :offset="[-20, '20px']">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
    </div>
  </template>
```
:::

### 自定义颜色
:::demo
```html
  <template>
    <div>
      <mku-badge color="#e80e9b">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge color="#ffe58f">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge color="#0e3de8">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge color="#0ee829">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge color="#0ec0e8">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
      <mku-badge color="#940ee8">
        <a href="" class="doc-badge__link"></a>
      </mku-badge>
    </div>
  </template>
```
:::

### Badge Attributes

| 参数        | 说明                                             |       类型        | 可选值 | 默认值  | 必填  |
| :---------- | :----------------------------------------------- | :---------------: | :----: | :-----: | :---: |
| value       | 徽章的内容                                       | `String | Number` |   -    |   `0`   |  否   |
| max         | 定义`value`为数字类型时的最大值，超出会显示+号   |     `Number`      |   -    |    -    |  否   |
| hidden      | 是否隐藏徽章                                     |     `Boolean`     |   -    | `false` |  否   |
| hidden-zero | `value`为数字类型时，且值为`0`的时候是否隐藏徽章 |    `Function`     |   -    |    -    |  否   |
| dot         | 仅展示圆点                                       |     `Boolean`     |   -    | `false` |  否   |
| dot-size    | 自定义圆点的大小尺寸，为`Number`类型时单位为`px` | `String | Number` |   -    |    -    |  否   |
| offset      | 定义当前徽章中心点在`[x、y]`轴上的偏移量         |      `Array`      |   -    |    -    |  否   |
| type        | 几种常见的颜色类型                               |     `String`      |   -    |    -    |  否   |
| color       | 自定义徽章的颜色，权重高于type                   |     `String`      |   -    |    -    |  否   |
