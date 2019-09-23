## Button 按钮

### Examples 基本示例

:::demo
```html
<mku-button type="primary">Primary</mku-button>
<mku-button>Default</mku-button>
<mku-button type="dashed">Dashed</mku-button>
<mku-button type="danger">Danger</mku-button>
<mku-button type="link">Link-Button</mku-button>
```
:::

### Size 按钮尺寸

:::demo
```html
<mku-button size="large">large</mku-button>
<mku-button>default</mku-button>
<mku-button size="small">small</mku-button>
```
:::

### Icon 图标

:::demo
```html
<mku-button type="primary" icon="search">搜索</mku-button>
<mku-button icon="download">下载</mku-button>
<mku-button type="danger" icon="delete">删除</mku-button>
```
:::


### Loading 加载中

:::demo
```html
<mku-button type="primary" :loading="isLoading1">加载中</mku-button>
<mku-button
  icon="download"
  :loading="isLoading2"
  @click="handleClick"
>
  {{isLoading2 ? '下载中' : '立即下载'}}
</mku-button>

<script>
  export default {
    data () {
      return {
        isLoading1: true,
        isLoading2: false
      }
    },
    methods: {
      handleClick () {
        this.isLoading2 = true
        setTimeout(() => {
          this.isLoading2 = false
        }, 2000)
      }
    }
  }
</script>
```
:::

### Block 块级按钮

块级按钮将自适应父容器尺寸。

:::demo
```html
<mku-button type="primary" block>立即提交</mku-button>
<br />
<mku-button block>Default</mku-button>
<br />
<mku-button type="dashed" block>Dashed</mku-button>
<br />
<mku-button type="danger" block>危险操作</mku-button>
<br />
<mku-button type="link" block>Link-Button</mku-button>
```
:::

### Button Attributes

| 参数   | 说明             | 类型   | 可选值 | 默认值 | 示例 |
| :----- | :--------------- | :----- | :----- | :----- | :--- |
| type | 按钮类型 | String |   primary、default、dashed、danger、link   | default      |  danger   |
| block | 是否成为块级按钮，会自适应铺满父容器 | Boolean | true、false     | false     | true   |
| size | 按钮尺寸 | String | large、default、small     | 0      | 20   |
| icon | 按钮图标 | String | 所有组件库支持的icon      | -     | search  |
| loading | loading状态，加载过程中禁止重复点击 | Boolean | true、false      | false      | true   |
| disabled | 是否禁用 | Boolean | true、false     | false      | true   |


### Button Events

 | 事件名 | 说明                                    | 回调函数参数 |
 | :----- | :-------------------------------------- | :----------- |
 | click  | 点击按钮时触发                      | Event        |
